import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LessonItem from './LessonItem';
import { LessonType } from 'types/ComponentsType';

describe('LessonItem', () => {
  const lesson: LessonType = {
    id: 1,
    title: 'Lesson 1',
    description: 'This is lesson 1',
    steps: ['Step 1', 'Step 2', 'Step 3'],
    status: 'unlocked',
    completed: false,
    duration: '10 min',
    link: 'https://example.com',
    previewImageLink: 'https://example.com/image.png',
    order: '1',
  };

  const handleLessonClick = jest.fn();
  const detailedLessons = {};

  it('renders the lesson title and a button', () => {
    render(
      <LessonItem
        lesson={lesson}
        handleLessonClick={handleLessonClick}
        detailedLessons={detailedLessons}
      />
    );

    const titleElement = screen.getByText(lesson.title);
    expect(titleElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls handleLessonClick when button is clicked', () => {
    render(
      <LessonItem
        lesson={lesson}
        handleLessonClick={handleLessonClick}
        detailedLessons={detailedLessons}
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleLessonClick).toHaveBeenCalledWith(lesson.id);
  });

  it('renders LessonContent when detailedLessons[lesson.id] is true', () => {
    detailedLessons[lesson.id] = true;

    render(
      <LessonItem
        lesson={lesson}
        handleLessonClick={handleLessonClick}
        detailedLessons={detailedLessons}
      />
    );

    const lessonContentElement = screen.getByTestId('lesson-content');
    expect(lessonContentElement).toBeInTheDocument();
  });

  it('does not render LessonContent when detailedLessons[lesson.id] is false', () => {
    detailedLessons[lesson.id] = false;

    render(
      <LessonItem
        lesson={lesson}
        handleLessonClick={handleLessonClick}
        detailedLessons={detailedLessons}
      />
    );

    const lessonContentElement = screen.queryByTestId('lesson-content');
    expect(lessonContentElement).not.toBeInTheDocument();
  });

  it('renders disabled message when lesson is locked', () => {
    lesson.status = 'locked';

    render(
      <LessonItem
        lesson={lesson}
        handleLessonClick={handleLessonClick}
        detailedLessons={detailedLessons}
      />
    );

    const disabledMessageElement = screen.getByText(`${lesson.title} disabled`);
    expect(disabledMessageElement).toBeInTheDocument();
  });
});
