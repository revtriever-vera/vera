import { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';

interface Props {
  value: string;
}

const DIGITS = '0123456789'.split('');

// O HTML sai com o valor final (cada coluna já deslocada para o dígito certo).
// No cliente, quando entra na tela, as colunas rolam de 0 até o dígito.
export default function Odometer({ value }: Props) {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const strips = Array.from(el.querySelectorAll<HTMLElement>('.s'));
    strips.forEach((s) => (s.style.transform = 'translateY(0)'));
    const stop = inView(
      el,
      () => {
        strips.forEach((s, n) => {
          const d = Number(s.dataset.d);
          animate(s, { transform: ['translateY(0em)', `translateY(${-d * 1.1}em)`] }, { duration: 1.4 + n * 0.12, ease: [0.16, 1, 0.3, 1] });
          s.style.transform = `translateY(${-d * 1.1}em)`;
        });
      },
      { amount: 0.6 },
    );
    return stop;
  }, [value]);

  return (
    <span className="odo" ref={root} role="img" aria-label={value}>
      {value.split('').map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} className="d" aria-hidden="true">
            <span className="s" data-d={ch} style={{ transform: `translateY(${-Number(ch) * 1.1}em)` }}>
              {DIGITS.map((d) => (
                <b key={d}>{d}</b>
              ))}
            </span>
          </span>
        ) : (
          <span key={i} aria-hidden="true" style={{ whiteSpace: 'pre' }}>
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
