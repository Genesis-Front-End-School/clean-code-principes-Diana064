import { useState, useEffect } from 'react';
import { TextWrapper, CourseTitle, LessonsList } from './Lessons.module';
import LessonsListWrapper from './LessonsListWrapper';
import LockedLesson from './LockedLessons';
export const Lessons = ({ course }) => {
  const [detailedLessons, setDetailedLessons] = useState({});

  useEffect(() => {
    const storedLesson = localStorage.getItem('detailedLesson');

    if (storedLesson) {
      setDetailedLessons(JSON.parse(storedLesson));
    }
  }, []);

  const handleLessonClick = lessonId => {
    setDetailedLessons(prevState => {
      const newState = {
        ...prevState,
        [lessonId]: !prevState[lessonId],
      };
      localStorage.setItem('detailedLesson', JSON.stringify(newState));
      return newState;
    });
  };

  const { containsLockedLessons, lessons } = course;
  const lessonsListWrapperProps = {
    lessons,
    handleLessonClick,
    detailedLessons,
  };

  return (
    <TextWrapper>
      <CourseTitle>List of lessons: </CourseTitle>
      {containsLockedLessons && lessons.length ? (
        <LessonsListWrapper {...lessonsListWrapperProps} />
      ) : (
        <LessonsList>
          {lessons.map(lesson => (
            <LockedLesson key={lesson.id} lesson={lesson} />
          ))}
        </LessonsList>
      )}
    </TextWrapper>
  );
};
