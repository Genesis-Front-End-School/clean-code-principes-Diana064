import React from 'react';
import { render, screen } from '@testing-library/react';
import LockedLesson from './LockedLessons';
describe('LockedLesson', () => {
  const title = 'Lesson 1';

  it('renders the title and a lock icon', () => {
    render(<LockedLesson title={title} />);
    const titleElement = screen.getByText(`${title} disabled`);
    expect(titleElement).toBeInTheDocument();

    const lockIconElement = screen.getByRole('img', { name: /lock icon/i });
    expect(lockIconElement).toBeInTheDocument();
  });
});
