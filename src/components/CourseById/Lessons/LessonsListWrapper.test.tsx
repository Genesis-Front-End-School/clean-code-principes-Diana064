import React from 'react';
import { render, screen } from '@testing-library/react';
import LessonsListWrapper from './LessonsListWrapper';
import { LessonType } from 'types/ComponentsType';

describe('LessonsListWrapper', () => {
  const lessons: LessonType[] = [
    {
      id: 1,
      title: 'Lesson 1',
      description: 'Lesson 1',
      steps: [],
      status: 'locked',
      completed: true,
      duration: '0.6',
      link: 'Lesson 1',
      previewImageLink: 'Lesson 1',
      order: 'Lesson 1',
    },
    {
      id: 2,
      title: 'Lesson 2',
      description: 'Lesson 2',
      steps: [],
      status: 'unlocked',
      completed: true,
      duration: '0.6',
      link: 'Lesson 2',
      previewImageLink: 'Lesson 2',
      order: 'Lesson 2',
    },
  ];

  const handleLessonClick = jest.fn();
  const detailedLessons = {};

  it('renders a list of LessonItems', () => {
    render(
      <LessonsListWrapper
        lessons={lessons}
        handleLessonClick={handleLessonClick}
        detailedLessons={detailedLessons}
      />
    );

    const lessonItemElements = screen.getAllByTestId('lesson-item');
    expect(lessonItemElements).toHaveLength(lessons.length);

    lessonItemElements.forEach((element, index) => {
      const lesson = lessons[index];
      expect(element).toHaveTextContent(lesson.title);
    });
  });
});
