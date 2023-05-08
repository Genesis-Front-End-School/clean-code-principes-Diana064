import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CurrentCourse from './CurrentCourse';
import * as ImageService from '../components/services/api';
import { CourseType } from '../types/ComponentsType';

jest.mock('../components/services/api');

describe('CurrentCourse', () => {
  let getCoursByIdMock: jest.MockedFunction<typeof ImageService.getCoursById>;

  beforeEach(() => {
    getCoursByIdMock = jest.fn();
    (ImageService.getCoursById as jest.MockedFunction<
      typeof ImageService.getCoursById
    >) = getCoursByIdMock;
  });

  test('renders course details when data is fetched successfully', async () => {
    const mockCourse: CourseType = {
      id: 1,
      title: 'Test Course',
      description: 'This is a test course',
      rating: 5,
      meta: {
        skills: [],
        courseVideoPreview: {
          link: 'string',
        },
      },
      lessons: [],
      duration: '2h',
      imageUrl: 'https://example.com/image.jpg',
      tags: ['tag1', 'tag2'],
      lessonsCount: 10,
      previewImageLink: 'https://example.com/preview-image.jpg',
      containsLockedLessons: true,
    };

    getCoursByIdMock.mockResolvedValue(mockCourse);
    render(
      <MemoryRouter
        initialEntries={[{ pathname: `/courses/${mockCourse.id}` }]}
      >
        <Route path="/courses/:courseId">
          <CurrentCourse />
        </Route>
      </MemoryRouter>
    );
    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('This is a test course')).toBeInTheDocument();
    expect(getCoursByIdMock).toHaveBeenCalledTimes(1);
    expect(getCoursByIdMock).toHaveBeenCalledWith(mockCourse.id);
  });
});
