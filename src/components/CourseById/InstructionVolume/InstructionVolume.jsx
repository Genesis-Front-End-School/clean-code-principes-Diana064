import { Button } from './Instruction.module';
import { useCallback } from 'react';
import { InstructionContent } from './InstructionContent';

function handleVideoSpeed() {
  alert(
    'You can use your keyboard to increase/reduce your speed of video just push the key equal/minus.'
  );
}

function handleButtonClick() {
  handleVideoSpeed();
}

export const InstructionVolume = () => {
  const handleAlert = useCallback(() => {
    handleButtonClick();
  }, []);

  return (
    <>
      <InstructionContent />
      <Button type="button" onClick={handleAlert}>
        Click me to show the video speed message
      </Button>
    </>
  );
};
