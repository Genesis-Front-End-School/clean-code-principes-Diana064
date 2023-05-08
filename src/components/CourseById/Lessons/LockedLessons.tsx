import React from 'react';
import { LessonsListItem, LockIcon } from './Lessons.module';

type LockedLessonProps = {
  title: string;
};

const LockedLesson: React.FC<LockedLessonProps> = ({ title }) => (
  <LessonsListItem>
    <p>
      <LockIcon />
      {`${title} disabled`}
    </p>
  </LessonsListItem>
);

export default LockedLesson;
