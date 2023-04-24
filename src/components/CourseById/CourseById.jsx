import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import { useEffect } from 'react';
import { usePlaybackRate } from 'components/VideoSpeed/VideoSpeed';
import { useRef } from 'react';
import { InstructionVolume } from './InstructionVolume/InstructionVolume';
import { CourseData } from './CourseData/CourseData';
import {
  IconGoBack,
  Button,
  Title,
  VideoWrapper,
  ContenxtWrapper,
  TitleWrapper,
  ContentWrapper,
  VideoPlayer,
} from './СourseById.module';
import { DEFAULT_SRC_VIDEO } from 'variables/constants';
import { Lessons } from './Lessons/Lessons';

export const CourseById = ({ course, handleGoBack }) => {
  const [played, setPlayed] = useLocalStorage('progressTime', {
    playedSeconds: 0,
  });
  const playbackRate = usePlaybackRate(1);
  const playerRef = useRef(null);

  const src = course?.meta?.courseVideoPreview?.link
    ? course.meta.courseVideoPreview.link
    : DEFAULT_SRC_VIDEO;

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(played.playedSeconds);
    }
  }, [played.playedSeconds]);

  function progressTime(currentSec) {
    const progress = { ...played, playedSeconds: currentSec };
    setPlayed(progress);
  }

  return (
    <>
      {course && (
        <ContentWrapper>
          <TitleWrapper>
            <Button type="button" onClick={handleGoBack}>
              <IconGoBack />
              Go back
            </Button>
            <Title>{course.title}</Title>
          </TitleWrapper>
          <ContenxtWrapper>
            <VideoWrapper>
              <VideoPlayer
                width="100%"
                height="100%"
                ref={playerRef}
                playing={true}
                url={src}
                type="video/hls"
                muted={true}
                controls
                onProgress={progress => {
                  progressTime(progress.playedSeconds);
                }}
                pip={true}
                playbackRate={playbackRate}
              />
              <InstructionVolume />
            </VideoWrapper>
            <CourseData course={course} handleGoBack={handleGoBack} />
          </ContenxtWrapper>
          <Lessons course={course} />
        </ContentWrapper>
      )}
    </>
  );
};
