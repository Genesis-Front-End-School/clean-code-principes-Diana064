import { LessonsListItem, LockIcon } from './Lessons.module';

const LockedLesson = ({ lesson }) => (
  <LessonsListItem>
    <p>
      <LockIcon />
      {`${lesson.title} disabled`}
    </p>
  </LessonsListItem>
);

export default LockedLesson;
