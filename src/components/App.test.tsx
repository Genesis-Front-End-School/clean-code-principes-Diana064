import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from './App';
import { MemoryRouter, Route } from 'react-router-dom';
test('renders ListCourses component', () => {
  render(<App />);
  const linkElement = screen.getByText(/ListCourses/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders CurrentCourse component with correct props', () => {
  const testCourseId = 'test-id';
  render(
    <MemoryRouter initialEntries={[`/course/${testCourseId}`]}>
      <Route path="/course/:courseId" element={<App />} />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/CurrentCourse/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByTestId('current-course-id')).toHaveTextContent(
    testCourseId
  );
});
