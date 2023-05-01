import { useState, useEffect } from 'react';

export function usePlaybackRate(initialRate: number): number {
  const [playbackRate, setPlaybackRate] = useState<number>(initialRate);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === 'Equal' && playbackRate < 2) {
        setPlaybackRate((prevPlaybackRate: number) => prevPlaybackRate + 0.25);
      } else if (event.code === 'Minus' && playbackRate > 0.5) {
        setPlaybackRate((prevPlaybackRate: number) => prevPlaybackRate - 0.25);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playbackRate]);

  return playbackRate;
}
