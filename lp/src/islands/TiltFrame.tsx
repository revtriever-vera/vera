import { useRef } from 'react';
import type { ReactNode } from 'react';
import { animate } from 'motion';

// Tilt de poucos graus, só no desktop com mouse (client:media). Respeita movimento reduzido.
export default function TiltFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const to = (rx: number, ry: number) => {
    if (ref.current && !reduced) animate(ref.current, { rotateX: rx, rotateY: ry }, { type: 'spring', stiffness: 120, damping: 18 });
  };

  return (
    <div
      className="frame"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        to(-py * 6, px * 8);
      }}
      onPointerLeave={() => to(0, 0)}
    >
      {children}
    </div>
  );
}
