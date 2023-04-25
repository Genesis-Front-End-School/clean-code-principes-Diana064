import {
  CourseTitle,
  TextWrapper,
  TextSubtitle,
  List,
} from './CourseData.module';

import { SkillsAndTagsDetails } from '../SkillsAndTagsDetails';

export const CourseData = ({ course }) => {
  const {
    rating = 'Missing rating',
    description = 'Missing description',
    meta: { skills },
    tags,
  } = course;

  return (
    <>
      <TextWrapper>
        <CourseTitle>Detailed information:</CourseTitle>
        <p>
          <TextSubtitle>Description:</TextSubtitle>
          {description}
        </p>
        <p>
          <TextSubtitle>Rating:</TextSubtitle>
          {rating}
        </p>
        <p>
          <TextSubtitle>Tags:</TextSubtitle>
        </p>
        <List>
          <SkillsAndTagsDetails item={tags} />
        </List>
        <p>
          <TextSubtitle>Skills:</TextSubtitle>
        </p>
        <List>
          <SkillsAndTagsDetails item={skills} />
        </List>
      </TextWrapper>
    </>
  );
};
