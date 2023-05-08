import React, { useState, useEffect } from 'react';
import { TextWrapper, CourseTitle, LessonsList } from './Lessons.module';
import LessonsListWrapper from './LessonsListWrapper';

import {
  CourseType,
  LessonType,
  DetailedLessonState,
} from 'types/ComponentsType';

type LessonProps = {
  course: CourseType;
};

export const Lessons: React.FC<LessonProps> = ({ course }) => {
  const [detailedLessons, setDetailedLessons] = useState<DetailedLessonState>(
    {}
  );

  useEffect(() => {
    const storedLesson = localStorage.getItem('detailedLesson');

    if (storedLesson) {
      setDetailedLessons(JSON.parse(storedLesson));
    }
  }, []);

  const handleLessonClick = (lessonId: number) => {
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
          {lessons?.map(lesson => (
            <LockedLesson
              key={lesson.id}
              lesson={lesson}
              isDetailed={false}
              handleLessonClick={function (lessonId: number): void {
                throw new Error('Function not implemented.');
              }}
            />
          ))}
        </LessonsList>
      )}
    </TextWrapper>
  );
};

export interface LockedLessonProps {
  lesson: LessonType;
  isDetailed: boolean;
  handleLessonClick: (lessonId: number) => void;
}

const LockedLesson: React.FC<LockedLessonProps> = ({
  lesson,
  isDetailed,
  handleLessonClick,
}) => {
  const { id, title, duration, completed } = lesson;

  return (
    <div>
      <h3 onClick={() => handleLessonClick(id)}>{title}</h3>
      {isDetailed && (
        <>
          <p>Duration: {duration}</p>
          <p>Completed: {completed ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  );
};

export default Lessons;
