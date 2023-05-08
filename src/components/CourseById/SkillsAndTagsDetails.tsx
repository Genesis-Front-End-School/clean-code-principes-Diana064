import React from 'react';
import { nanoid } from 'nanoid';
import { Item, SkillsIcon } from './CourseData/CourseData.module';

interface SkillsAndTagsDetailsProps {
  item: string[] | undefined;
}

export const SkillsAndTagsDetails: React.FC<SkillsAndTagsDetailsProps> = ({
  item,
}) => {
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
