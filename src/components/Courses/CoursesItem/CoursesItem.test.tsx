import { screen } from '@testing-library/react';

describe('CoursesItem component', () => {
  it('renders course title', () => {
    expect(screen.getByText('Mock Course')).toBeInTheDocument();
  });

  it('renders course video with default src if no course video preview link is provided', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', DEFAULT_SRC_VIDEO);
  });

  it('renders course video with provided src if course video preview link is provided', () => {
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://www.example.com/video'
    );
  });

  it('renders course description', () => {
    expect(screen.getByText('This is a mock course')).toBeInTheDocument();
  });

  it('renders lessons count', () => {
    expect(screen.getByText('Lessons count:')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('renders course rating', () => {
    expect(screen.getByText('Rating:')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders course skills', () => {
    expect(screen.getByText('Skills:')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
  });
});

function DEFAULT_SRC_VIDEO(arg0: string, DEFAULT_SRC_VIDEO: any) {
  throw new Error('Function not implemented.');
}
