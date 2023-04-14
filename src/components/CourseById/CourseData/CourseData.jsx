import {
  CourseTitle,
  TextWrapper,
  TextSubtitle,
  List,
  Item,
  SkillsIcon,
} from './CourseData.module';
import { nanoid } from 'nanoid';

export const CourseData = ({ course }) => {
  const {
    rating = 'Missing rating',
    description = 'Missing description',
    meta: { skills } = 'Missing skills',
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
          {tags ? (
            tags.map(tag => (
              <Item key={nanoid()}>
                <SkillsIcon />
                {tag}
              </Item>
            ))
          ) : (
            <Item>Missing tags</Item>
          )}
        </List>
        <p>
          <TextSubtitle>Skills:</TextSubtitle>
        </p>
        <List>
          {skills ? (
            skills.map(skill => (
              <Item key={nanoid()}>
                <SkillsIcon />
                {skill}
              </Item>
            ))
          ) : (
            <Item>Missing skills</Item>
          )}
        </List>
      </TextWrapper>
    </>
  );
};
