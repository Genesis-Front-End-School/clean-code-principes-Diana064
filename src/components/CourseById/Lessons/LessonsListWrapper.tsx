import React from 'react';
import LessonItem from './LessonItem';
import { LessonsList } from './Lessons.module';
import { LessonType } from 'types/ComponentsType';

type LessonsListWrapperProps = {
  lessons: LessonType[];
  handleLessonClick: (lessonId: number) => void;
  detailedLessons: {
    [key: number]: boolean;
  };
};
const LessonsListWrapper: React.FC<LessonsListWrapperProps> = ({
  lessons,
  handleLessonClick,
  detailedLessons,
}) => {
  const lessonItems = lessons.map(lesson => (
    <LessonItem
      key={lesson.id}
      lesson={lesson}
      handleLessonClick={handleLessonClick}
      detailedLessons={detailedLessons}
    />
  ));

  return <LessonsList>{lessonItems}</LessonsList>;
};

export default LessonsListWrapper;
