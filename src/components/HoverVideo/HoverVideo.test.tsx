import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { HoverVideo } from './HoverVideo';

describe('HoverVideo', () => {
  it('renders an image by default', () => {
    render(
      <HoverVideo
        src="https://example.com/video.m3u8"
        img="https://example.com/image.jpg"
        alt="Example"
      />
    );
    expect(screen.getByAltText('Example')).toBeInTheDocument();
  });

  it('renders a video when hovered', () => {
    render(
      <HoverVideo
        src="https://example.com/video.m3u8"
        img="https://example.com/image.jpg"
        alt="Example"
      />
    );
    fireEvent.mouseEnter(screen.getByAltText('Example'));
    expect(screen.getByRole('video')).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByRole('video'));
    expect(screen.getByAltText('Example')).toBeInTheDocument();
  });
});
