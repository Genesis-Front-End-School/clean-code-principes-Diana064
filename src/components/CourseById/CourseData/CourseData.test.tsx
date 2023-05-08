import { screen } from '@testing-library/react';

describe('CourseData', () => {
  it('renders the course description', () => {
    expect(
      screen.getByText('This is a course about programming.')
    ).toBeInTheDocument();
  });

  it('renders the course rating', () => {
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders the course tags', () => {
    expect(screen.getByText('Programming')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
  });

  it('renders the course skills', () => {
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
