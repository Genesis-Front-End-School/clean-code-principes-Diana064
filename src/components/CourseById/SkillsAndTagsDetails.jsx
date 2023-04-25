import { Item, SkillsIcon } from './CourseData/CourseData.module';
import { nanoid } from 'nanoid';
export const SkillsAndTagsDetails = ({ item }) => {
  return (
    <>
      {item ? (
        item.map(tag => (
          <Item key={nanoid()}>
            <SkillsIcon />
            {tag}
          </Item>
        ))
      ) : (
        <Item>{`Missing ${typeof item === 'string' ? item : ''}`}</Item>
      )}
    </>
  );
};
