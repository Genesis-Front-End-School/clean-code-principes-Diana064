import React from 'react';
import { useState } from 'react';
import { IMG, HoverPlayer, HoverPlayerWrapper } from './HoverVideo.module';

interface HoverVideoProps {
  src: string;
  img: string;
  alt: string;
}

export const HoverVideo: React.FC<HoverVideoProps> = ({ src, img, alt }) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setHover(true);
  };
  const handleMouseLeave = (): void => {
    setHover(false);
  };

  return (
    <HoverPlayerWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? (
        <HoverPlayer
          width="100%"
          height="100%"
          playing={true}
          url={src}
          type="video/hls"
          muted={true}
        />
      ) : (
        <IMG src={img} alt={alt} />
      )}
    </HoverPlayerWrapper>
  );
};
