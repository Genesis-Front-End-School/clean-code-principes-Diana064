import { useState } from 'react';
import { IMG, HoverPlayer, HoverPlayerWrapper } from './HoverVideo.module';

export const HoverVideo = ({ src, img, alt }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
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
