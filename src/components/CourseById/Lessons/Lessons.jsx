import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import {
  TextWrapper,
  LockIcon,
  UnLockIcon,
  Button,
  CourseTitle,
  LessonsList,
  LessonsListItem,
} from './Lessons.module';
import { LessonData } from './LessonsData/LessonsData';

export const Lessons = ({ course }) => {
  const [detailedLessons, setDetailedLessons] = useState({});
  const { containsLockedLessons, lessons } = course;

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

  return (
    <TextWrapper>
      <CourseTitle>List of lessons: </CourseTitle>
      {containsLockedLessons && (lessons || []).length ? (
        <LessonsList>
          {lessons.map(lesson => {
            return lesson.status === 'unlocked' ? (
              <LessonsListItem key={nanoid()}>
                <Button
                  type="button"
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <UnLockIcon />
                  {lesson.title}
                </Button>
                {detailedLessons[lesson.id] && <LessonData lesson={lesson} />}
              </LessonsListItem>
            ) : (
              <LessonsListItem key={nanoid()}>
                <p>
                  <LockIcon />
                  {`${lesson.title} disabled`}
                </p>
              </LessonsListItem>
            );
          })}
        </LessonsList>
      ) : (
        <LessonsList>
          {(lessons || []).map(lesson => (
            <LessonsListItem key={nanoid()}>
              <p>
                <LockIcon />
                {`${lesson.title} `}
              </p>
            </LessonsListItem>
          ))}
        </LessonsList>
      )}
    </TextWrapper>
  );
};
