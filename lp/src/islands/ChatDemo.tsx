import { useEffect, useRef, useState } from 'react';
import { inView } from 'motion';

interface Props {
  question: string;
  answer: string;
  thinking: string;
  note: string;
  label: string;
}

type Phase = 'done' | 'asking' | 'thinking' | 'streaming';

// SSR e sem JS: conversa completa. No cliente, quando entra na tela, digita a pergunta,
// mostra "pensando" e faz o stream da resposta. O texto restante fica invisível
// (visibility) para o balão já nascer com a altura final e não mexer no layout.
export default function ChatDemo({ question, answer, thinking, note, label }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('done');
  const [q, setQ] = useState(question.length);
  const [a, setA] = useState(answer.length);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setPhase('asking');
    setQ(0);
    setA(0);
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const stop = inView(
      el,
      () => {
        let i = 0;
        const typeQ = () => {
          i += 1;
          setQ(i);
          if (i < question.length) later(typeQ, 38);
          else
            later(() => {
              setPhase('thinking');
              later(() => {
                setPhase('streaming');
                let j = 0;
                const stream = () => {
                  j = Math.min(answer.length, j + 2);
                  setA(j);
                  if (j < answer.length) later(stream, 22);
                  else setPhase('done');
                };
                stream();
              }, 1100);
            }, 350);
        };
        typeQ();
      },
      { amount: 0.5 },
    );
    return () => {
      stop();
      timers.forEach(window.clearTimeout);
    };
  }, [question, answer]);

  const showVera = phase !== 'asking';
  return (
    <div className="chat" ref={root} role="group" aria-label={label}>
      <div className="msg me">
        {question.slice(0, q)}
        <span className="ghost">{question.slice(q)}</span>
      </div>
      <div className="msg vera" style={showVera ? undefined : { visibility: 'hidden' }}>
        {answer.slice(0, a)}
        <span className="ghost">{answer.slice(a)}</span>
        {phase === 'thinking' && (
          <span className="think">
            {thinking}
            <span className="dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </span>
        )}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
