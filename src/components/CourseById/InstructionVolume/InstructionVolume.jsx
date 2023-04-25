import { CourseTitle, Button, IntructionWrapper } from './Instruction.module';
import { useCallback } from 'react';

function handleVideoSpeed() {
  alert(
    'You can use your keyboard to increase/reduce your speed of video just push the key equal/minus.'
  );
}

function SomeComponent() {
  const handleAlert = useCallback(() => {
    handleVideoSpeed();
  }, []);

  return (
    <button onClick={handleAlert}>
      Click me to show the video speed message
    </button>
  );
}

export const InstructionVolume = () => {
  return (
    <IntructionWrapper>
      <CourseTitle>
        <p>How to change the speed using keyboard?</p>
        <p>Please click the "Instruction" button to learn more.</p>
      </CourseTitle>
      <Button type="button" onClick={SomeComponent}>
        Click me to show the video speed message
      </Button>
    </IntructionWrapper>
  );
};
