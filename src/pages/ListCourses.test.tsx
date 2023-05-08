import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListCourses } from './ListCourses';

describe('ListCourses', () => {
  test('renders the Courses component', () => {
    render(<ListCourses />);
    expect(
      screen.getByRole('heading', { name: /Courses/i })
    ).toBeInTheDocument();
  });
});
