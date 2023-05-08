import { renderHook, act } from '@testing-library/react-hooks';
import { useProgressTime } from './UseProgressTime';

jest.mock('components/hooks/UseLocaleStorage', () => ({
  useLocalStorage: jest.fn().mockReturnValue([{ playedSeconds: 0 }, jest.fn()]),
}));

describe('useProgressTime', () => {
  it('returns playerRef and progressTime function', () => {
    const { result } = renderHook(() => useProgressTime());

    expect(result.current).toHaveProperty('playerRef');
    expect(result.current).toHaveProperty('progressTime');
  });

  it('updates the played time when progressTime is called', () => {
    const seekTo = jest.fn();
    const playerRef = { current: { seekTo } };
    const { result } = renderHook(() => useProgressTime());
    const currentSec = 30;

    act(() => {
      result.current.playerRef.current = playerRef;
      result.current.progressTime(currentSec);
    });

    expect(seekTo).toHaveBeenCalledWith(currentSec);
    expect(result.current.progressTime).toBeInstanceOf(Function);
  });
});
