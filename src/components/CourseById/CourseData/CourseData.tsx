import React from 'react';
import { SkillsAndTagsDetails } from '../SkillsAndTagsDetails';
import { CourseType } from '../../../types/ComponentsType';
import {
  CourseTitle,
  TextWrapper,
  TextSubtitle,
  List,
} from './CourseData.module';

type CourseDataProps = {
  course: CourseType;
  handleGoBack: () => void;
};

export const CourseData: React.FC<CourseDataProps> = ({ course }) => {
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
        <List>{tags && <SkillsAndTagsDetails item={tags} />}</List>
        <p>
          <TextSubtitle>Skills:</TextSubtitle>
        </p>
        <List>{skills && <SkillsAndTagsDetails item={skills} />}</List>
      </TextWrapper>
    </>
  );
};
