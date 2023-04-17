import { HoverVideo } from 'components/HoverVideo/HoverVideo';
import {
  CourseTitle,
  TextWrapper,
  TextSubtitle,
  SkillsList,
  SkillsItem,
  SkillsIcon,
} from './CoursesItem.module';

import { nanoid } from 'nanoid';
export const CoursesItem = ({ course }) => {
  const {
    title = 'Missing title',
    lessonsCount = 'Missing lessonsCount',
    rating = 'Missing rating',
    description = 'Missing description',
    meta: { skills } = 'Missing skills',
  } = course;
  const defaultSrc =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const img = `${course.previewImageLink}/cover.webp`;
  return (
    <>
      <CourseTitle>{title}</CourseTitle>

      <HoverVideo
        src={
          course.meta.courseVideoPreview
            ? course.meta.courseVideoPreview.link
            : defaultSrc
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
          {skills ? (
            skills.map(skill => (
              <SkillsItem key={nanoid()}>
                <SkillsIcon />
                {skill}
              </SkillsItem>
            ))
          ) : (
            <p>Missing skills</p>
          )}
        </SkillsList>
      </TextWrapper>
    </>
  );
};
