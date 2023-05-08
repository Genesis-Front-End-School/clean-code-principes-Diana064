import { screen } from '@testing-library/react';

describe('LessonData', () => {
  test('renders lesson data', () => {
    expect(screen.getByText(/Number of lesson/i)).toBeInTheDocument();
    expect(screen.getByText(/Photo of lesson/i)).toBeInTheDocument();
    expect(screen.getByAltText(/img of lesson/i)).toBeInTheDocument();
    expect(screen.getByText(/Video of lesson/i)).toBeInTheDocument();
  });
});
