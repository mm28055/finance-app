/**
 * Asks Claude through the Claude Code command line, so the answer comes out of the owner's Claude
 * plan instead of a paid API. Used by the nightly filings digest since 8 Nov 2026 (it was about
 * ₹2,300 a month on Gemini). In GitHub Actions the plan is reached with the CLAUDE_CODE_OAUTH_TOKEN
 * secret (made once with `claude setup-token`).
 *
 * Callers must keep a fallback: when the plan's limit is reached, or the command is missing, this
 * throws and the caller goes back to Gemini.
 */
import { spawn } from 'child_process';
import path from 'path';

const SYSTEM = 'You answer exactly as the user message asks. When it asks for JSON, reply with the JSON only.';

/** True when this machine can reach Claude: a plan token is set (CI), or CLAUDE_FILINGS=1 locally. */
export const claudeAvailable = () => !!process.env.CLAUDE_CODE_OAUTH_TOKEN || process.env.CLAUDE_FILINGS === '1';

export function askClaude(prompt: string, model = 'opus', timeoutMs = 180000): Promise<string> {
    return new Promise((resolve, reject) => {
        const args = ['-p', '--model', model, '--output-format', 'json', '--tools', '', '--system-prompt', SYSTEM,
            '--no-session-persistence', '--strict-mcp-config', '--setting-sources', ''];
        // On Windows `claude` is a .cmd shim, which can't take these arguments safely: run its script with node.
        const win = process.platform === 'win32';
        const cli = path.join(process.env.APPDATA || '', 'npm', 'node_modules', '@anthropic-ai', 'claude-code', 'cli.js');
        const child = win
            ? spawn(process.execPath, [cli, ...args], { stdio: ['pipe', 'pipe', 'pipe'] })
            : spawn('claude', args, { stdio: ['pipe', 'pipe', 'pipe'] });
        let out = '', err = '';
        const timer = setTimeout(() => { child.kill(); reject(new Error('Claude timed out')); }, timeoutMs);
        child.stdout.on('data', d => { out += d; });
        child.stderr.on('data', d => { err += d; });
        child.on('error', e => { clearTimeout(timer); reject(e); });
        child.on('close', code => {
            clearTimeout(timer);
            try {
                const j = JSON.parse(out);
                if (j.is_error || code !== 0) return reject(new Error(String(j.result || err || `exit ${code}`).slice(0, 300)));
                resolve(String(j.result || ''));
            } catch {
                reject(new Error((err || out || `exit ${code}`).slice(0, 300)));
            }
        });
        child.stdin.end(prompt);
    });
}
