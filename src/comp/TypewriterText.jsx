import { useEffect, useRef, useState } from 'react';

const TypewriterText = ({ text, speed = 35, className = '', showCursor = true }) => {
  const [index, setIndex] = useState(0);
  const frame = useRef();
  const lastTimeRef = useRef();

  useEffect(() => {
    const step = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;

      if (delta > speed) {
        setIndex((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            cancelAnimationFrame(frame.current);
            return prev;
          }
        });
        lastTimeRef.current = timestamp;
      }

      frame.current = requestAnimationFrame(step);
    };

    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [text, speed]);

  const visibleText = text.slice(0, index);
  const cursor = showCursor && index < text.length ? '▍' : ''; // smooth block cursor

  return (
    <p className={`text-zinc-100 text-lg mb-6 whitespace-pre-wrap ${className}`}>
      {visibleText}
      <span className="text-highly-accent animate-pulse">{cursor}</span>
    </p>
  );
};

export default TypewriterText;
