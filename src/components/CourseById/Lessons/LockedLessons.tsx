import React from 'react';
import { LessonsListItem, LockIcon } from './Lessons.module';
import { LessonType } from 'types/ComponentsType';
type LockedLessonProps = {
  lesson: LessonType;
};

const LockedLesson: React.FC<LockedLessonProps> = ({ lesson }) => (
  <LessonsListItem>
    <p>
      <LockIcon />
      {`${lesson.title} disabled`}
    </p>
  </LessonsListItem>
);

export default LockedLesson;
