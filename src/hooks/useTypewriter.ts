import { useState, useEffect } from 'react';

/**
 * Custom typewriter hook that reveals characters one by one after a start delay.
 * @param text The full text string to type out.
 * @param speed Typing speed in milliseconds per character (default: 38ms).
 * @param startDelay Delay in milliseconds before typing begins (default: 600ms).
 * @returns { displayed: string, done: boolean }
 */
export function useTypewriter(
  text: string,
  speed: number = 38,
  startDelay: number = 600
): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;
    let currentIndex = 0;

    setDisplayed('');
    setDone(false);

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayed(text.slice(0, currentIndex));
          if (currentIndex === text.length) {
            setDone(true);
            clearInterval(intervalId);
          }
        } else {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
