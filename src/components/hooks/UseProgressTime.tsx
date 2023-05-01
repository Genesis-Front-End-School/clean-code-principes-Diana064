import { useEffect, useRef } from 'react';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';

interface ProgressTime {
  playedSeconds: number;
}

export const useProgressTime = () => {
  const [played, setPlayed] = useLocalStorage<ProgressTime>('progressTime', {
    playedSeconds: 0,
  });
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(played.playedSeconds);
    }
  }, [played.playedSeconds]);

  function progressTime(currentSec: number) {
    const progress: ProgressTime = { ...played, playedSeconds: currentSec };
    setPlayed(progress);
  }

  return { playerRef, progressTime };
};
