import LessonItem from './LessonItem';
import { LessonsList } from './Lessons.module';

const LessonsListWrapper = ({
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
