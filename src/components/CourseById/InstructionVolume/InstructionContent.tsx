import React from 'react';
import { CourseTitle, IntructionWrapper } from './Instruction.module.jsx';

export const InstructionContent = () => {
  return (
    <IntructionWrapper>
      <CourseTitle>
        <p>How to change the speed using keyboard?</p>
        <p>Please click the "Instruction" button to learn more.</p>
      </CourseTitle>
    </IntructionWrapper>
  );
};
