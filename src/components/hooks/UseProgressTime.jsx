import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import { useEffect } from 'react';
import { useRef } from 'react';

export const useProgressTime = () => {
  const [played, setPlayed] = useLocalStorage('progressTime', {
    playedSeconds: 0,
  });
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(played.playedSeconds);
    }
  }, [played.playedSeconds]);

  function progressTime(currentSec) {
    const progress = { ...played, playedSeconds: currentSec };
    setPlayed(progress);
  }

  return { playerRef, progressTime };
};
