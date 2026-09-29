// Status icons and colours for checkpoints; shared by the company card (client) and the scorecard page (server).
import type React from 'react';
import { CheckCircle2, XCircle, CircleDot, Clock, MinusCircle } from 'lucide-react';
import type { CheckpointStatus } from '@/lib/checkpoints/types';

export const STATUS_STYLE: Record<CheckpointStatus, { label: string; icon: React.ElementType; cls: string }> = {
    met: { label: 'Met', icon: CheckCircle2, cls: 'text-emerald-600' },
    partly: { label: 'Partly', icon: CircleDot, cls: 'text-amber-500' },
    missed: { label: 'Missed', icon: XCircle, cls: 'text-rose-500' },
    pending: { label: 'Pending', icon: Clock, cls: 'text-gray-400' },
    dropped: { label: 'Dropped', icon: MinusCircle, cls: 'text-gray-300' },
};
