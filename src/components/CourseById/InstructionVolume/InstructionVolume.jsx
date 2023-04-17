import { CourseTitle, Button, IntructionWrapper } from './Instruction.module';

export const InstructionVolume = () => {
  return (
    <IntructionWrapper>
      <CourseTitle>
        <p>How to change the speed using keyboard?</p>
        <p>Please click the "Instruction" button to learn more.</p>
      </CourseTitle>
      <Button
        type="button"
        onClick={() =>
          alert(
            'You can use your keebord to increase/reduce your speed of video just push the key equal/minus.'
          )
        }
      >
        Instruction
      </Button>
    </IntructionWrapper>
  );
};
