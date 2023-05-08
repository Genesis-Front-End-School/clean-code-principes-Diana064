import { renderHook, act } from '@testing-library/react-hooks';
import { usePlaybackRate } from './VideoSpeed';

describe('usePlaybackRate', () => {
  it('should increment playback rate on "Equal" key press', () => {
    const { result } = renderHook(() => usePlaybackRate(1));
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Equal' }));
    });
    expect(result.current).toBe(1.25);
  });

  it('should decrement playback rate on "Minus" key press', () => {
    const { result } = renderHook(() => usePlaybackRate(1.25));
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Minus' }));
    });
    expect(result.current).toBe(1);
  });

  it('should not increment playback rate beyond 2', () => {
    const { result } = renderHook(() => usePlaybackRate(1.75));
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Equal' }));
    });
    expect(result.current).toBe(2);
  });

  it('should not decrement playback rate below 0.5', () => {
    const { result } = renderHook(() => usePlaybackRate(0.5));
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Minus' }));
    });
    expect(result.current).toBe(0.5);
  });
});
