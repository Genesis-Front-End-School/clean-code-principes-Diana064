import React from 'react';
import { render, screen } from '@testing-library/react';
import { LessonType } from 'types/ComponentsType';
import { LessonData } from './LessonsData';

describe('LessonData', () => {
  const lesson: LessonType = {
    id: 1,
    title: 'Lesson 1',
    description: 'This is lesson 1',
    steps: ['Step 1', 'Step 2', 'Step 3'],
    status: 'unlocked',
    completed: true,
    duration: '1h',
    link: 'http://example.com',
    previewImageLink: 'http://example.com/image.png',
    order: '1',
  };

  it('renders lesson title, description and steps', () => {
    render(<LessonData lesson={lesson} />);

    const titleElement = screen.getByText(lesson.title);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(lesson.description);
    expect(descriptionElement).toBeInTheDocument();

    lesson.steps.forEach(step => {
      const stepElement = screen.getByText(step);
      expect(stepElement).toBeInTheDocument();
    });
  });
});
