import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['pdf-parse'],
  // A new value each release: the browser asks for sector notes at an address carrying it
  // (lib/sector-notes-client.ts), so cached notes never outlive a release.
  env: { NOTES_VERSION: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) || String(Date.now()) },
};

export default nextConfig;
