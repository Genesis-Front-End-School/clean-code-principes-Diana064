import React from 'react';
import { HoverVideo } from 'components/HoverVideo/HoverVideo';
import { SkillsAndTagsDetails } from 'components/CourseById/SkillsAndTagsDetails';
import { DEFAULT_SRC_VIDEO } from 'variables/constants';
import {
  CourseTitle,
  TextWrapper,
  TextSubtitle,
  SkillsList,
} from './CoursesItem.module';

export type CoursesItemProps = {
  course: {
    title: string;
    lessonsCount: number;
    rating: number;
    description: string;
    meta: {
      skills: string[];
      courseVideoPreview: {
        link: string;
      };
    };
    previewImageLink: string;
  };
};
export const CoursesItem: React.FC<CoursesItemProps> = ({ course }) => {
  const {
    title = 'Missing title',
    lessonsCount = 'Missing lessonsCount',
    rating = 'Missing rating',
    description = 'Missing description',
    meta: { skills },
  } = course;

  const img = `${course.previewImageLink}/cover.webp`;
  return (
    <>
      <CourseTitle>{title}</CourseTitle>

      <HoverVideo
        src={
          course.meta.courseVideoPreview
            ? course.meta.courseVideoPreview.link
            : DEFAULT_SRC_VIDEO
        }
        img={img}
        alt={course.title}
      />
      <TextWrapper>
        <p>
          <TextSubtitle>Title of course:</TextSubtitle>
          {description}
        </p>

        <p>
          <TextSubtitle>Lessons count:</TextSubtitle>
          {lessonsCount}
        </p>
        <p>
          <TextSubtitle>Rating:</TextSubtitle>
          {rating}
        </p>
        <p>
          <TextSubtitle>Skills:</TextSubtitle>
        </p>
        <SkillsList>
          <SkillsAndTagsDetails item={skills} />
        </SkillsList>
      </TextWrapper>
    </>
  );
};
