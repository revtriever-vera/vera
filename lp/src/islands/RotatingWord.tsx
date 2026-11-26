import { useEffect, useState } from 'react';

interface Props {
  words: readonly string[];
  interval?: number;
}

// Todas as palavras ficam empilhadas na mesma célula, então a largura é a da maior
// e nada pula. Só a classe `cur` muda; sem JS a primeira palavra fica visível.
export default function RotatingWord({ words, interval = 2800 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setI((n) => (n + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="rot">
      {words.map((w, n) => (
        <span key={w} className={n === i ? 'cur' : undefined} aria-hidden={n === i ? undefined : true}>
          {w}
        </span>
      ))}
    </span>
  );
}
