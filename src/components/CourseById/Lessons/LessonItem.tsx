import React from 'react';
import { LessonContent } from './LessonContent';
import { LessonsListItem, Button, UnLockIcon } from './Lessons.module';
import { LessonType } from 'types/ComponentsType';

type LessonItemProps = {
  lesson: LessonType;
  handleLessonClick: (lessonId: number) => void;
  detailedLessons: { [key: number]: boolean };
};

const LessonItem: React.FC<LessonItemProps> = ({
  lesson,
  handleLessonClick,
  detailedLessons,
}) => {
  const isLocked = lesson.status !== 'unlocked';

  return (
    <LessonsListItem>
      {isLocked ? (
        <p>{`${lesson.title} disabled`}</p>
      ) : (
        <div>
          <Button type="button" onClick={() => handleLessonClick(lesson.id)}>
            <UnLockIcon />
            {lesson.title}
          </Button>
          {detailedLessons[lesson.id] && <LessonContent lesson={lesson} />}
        </div>
      )}
    </LessonsListItem>
  );
};

export default LessonItem;
