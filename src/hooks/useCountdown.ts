import { useEffect, useState } from 'react';

export const useCountdown = (initialSeconds: number) => {
  const [count, setCount] = useState(0);
  
  const countdown = Math.max(0, initialSeconds - count);
  const countdownMinutes = `${Math.floor(countdown / 60)}`.padStart(2, "0");
  const countdownSeconds = `${Math.floor(countdown % 60)}`.padStart(2, "0");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        const newCount = c + 1;
        if (newCount >= initialSeconds) {
          return initialSeconds;
        }
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialSeconds]);

  return {
    countdown,
    countdownMinutes,
    countdownSeconds,
    isFinished: countdown === 0
  };
};
