import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InstructionVolume } from './InstructionVolume';

describe('InstructionVolume', () => {
  it('renders the instruction content', () => {
    render(<InstructionVolume />);
    expect(screen.getByText('Video Speed')).toBeInTheDocument();
  });

  it('shows the video speed message when button is clicked', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<InstructionVolume />);
    const button = screen.getByRole('button', {
      name: 'Click me to show the video speed message',
    });
    fireEvent.click(button);

    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith(
      'You can use your keyboard to increase/reduce your speed of video just push the key equal/minus.'
    );

    alertSpy.mockRestore();
  });
});
