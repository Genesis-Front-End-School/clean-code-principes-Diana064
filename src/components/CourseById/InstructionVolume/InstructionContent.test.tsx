import { screen } from '@testing-library/react';

describe('InstructionContent', () => {
  it('renders the course title', () => {
    expect(
      screen.getByText('How to change the speed using keyboard?')
    ).toBeInTheDocument();
  });

  it('renders the instruction message', () => {
    expect(
      screen.getByText('Please click the "Instruction" button to learn more.')
    ).toBeInTheDocument();
  });
});
