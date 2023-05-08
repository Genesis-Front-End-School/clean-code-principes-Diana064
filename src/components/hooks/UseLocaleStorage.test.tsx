import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './UseLocaleStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default value if no previous value is found', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'default'));

    expect(result.current[0]).toBe('default');
  });

  it('should initialize with previous value if found', () => {
    localStorage.setItem('test', JSON.stringify('previous'));
    const { result } = renderHook(() => useLocalStorage('test', 'default'));

    expect(result.current[0]).toBe('previous');
  });

  it('should update local storage and state when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'default'));

    act(() => {
      result.current[1]('new');
    });

    expect(result.current[0]).toBe('new');
    expect(JSON.parse(localStorage.getItem('test') || '')).toBe('new');
  });
});
