import { useState, useEffect } from 'react';

export function usePlaybackRate(initialRate) {
  const [playbackRate, setPlaybackRate] = useState(initialRate);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Equal' && playbackRate < 2) {
        setPlaybackRate(prevPlaybackRate => prevPlaybackRate + 0.25);
      } else if (event.code === 'Minus' && playbackRate > 0.5) {
        setPlaybackRate(prevPlaybackRate => prevPlaybackRate - 0.25);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playbackRate]);

  return playbackRate;
}
