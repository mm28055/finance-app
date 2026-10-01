import React from 'react';

/**
 * Lets a tab open by resting the pointer on it, as well as by a click. The short wait means a
 * pointer merely passing over a tab on its way elsewhere does not switch it.
 *
 *   const hover = useHoverOpen();
 *   <button onClick={() => setTab(k)} {...hover(() => setTab(k))}>
 */
export function useHoverOpen(delayMs = 150) {
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const clear = () => { if (timer.current) { clearTimeout(timer.current); timer.current = null; } };
    React.useEffect(() => clear, []);
    return (open: () => void) => ({
        onMouseEnter: () => { clear(); timer.current = setTimeout(open, delayMs); },
        onMouseLeave: clear,
    });
}
