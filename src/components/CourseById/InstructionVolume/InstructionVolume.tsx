import React from 'react';
import { useCallback } from 'react';
import { Button } from './Instruction.module';
import { InstructionContent } from './InstructionContent';

function handleVideoSpeed(): void {
  alert(
    'You can use your keyboard to increase/reduce your speed of video just push the key equal/minus.'
  );
}

function handleButtonClick(): void {
  handleVideoSpeed();
}

export const InstructionVolume: React.FC = () => {
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
