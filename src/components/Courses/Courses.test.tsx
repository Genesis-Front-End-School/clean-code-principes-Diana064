import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Courses } from './Courses';

jest.mock('../services/api', () => ({
  getCourses: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'Course 1',
        description: 'Description for Course 1',
        thumbnailUrl: 'https://example.com/image1.jpg',
      },
      {
        id: 2,
        name: 'Course 2',
        description: 'Description for Course 2',
        thumbnailUrl: 'https://example.com/image2.jpg',
      },
      {
        id: 3,
        name: 'Course 3',
        description: 'Description for Course 3',
        thumbnailUrl: 'https://example.com/image3.jpg',
      },
    ])
  ),
}));

describe('Courses', () => {
  it('renders a list of courses', async () => {
    render(
      <MemoryRouter>
        <Courses />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('List of courses')).toBeInTheDocument();
    });

    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('displays an error message when there is an error fetching courses', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const errorMessage = 'Error fetching courses';
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error(errorMessage));

    render(
      <MemoryRouter>
        <Courses />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(errorMessage);
    });
  });
});
