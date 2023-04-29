import { useProgressTime } from 'components/hooks/UseProgressTime';
import ReactPlayer from 'react-player';
import { usePlaybackRate } from 'components/VideoSpeed/VideoSpeed';
import {
  TextSubtitle,
  Img,
  LessonsDataWrapper,
  VideoWrapper,
  Text,
} from './LessonsData.module';
import { DEFAULT_SRC_VIDEO, DEFAULT_SRC_IMG } from 'variables/constants';

export const LessonData = ({ lesson }) => {
  const { playerRef, progressTime } = useProgressTime();
  const playbackRate = usePlaybackRate(1);

  const img = lesson?.previewImageLink
    ? `${lesson.previewImageLink}/lesson-${lesson.order}.webp`
    : DEFAULT_SRC_IMG;

  return (
    <>
      {lesson && (
        <LessonsDataWrapper>
          <Text>
            <TextSubtitle>Number of lesson</TextSubtitle>
            {lesson.duration}
          </Text>
          <Text>
            <TextSubtitle>Photo of lesson</TextSubtitle>
            <Img src={img} width="300" height="200" alt="img of lesson" />
          </Text>
          <Text>
            <TextSubtitle>Video of lesson</TextSubtitle>
          </Text>
          <VideoWrapper>
            <ReactPlayer
              width="100%"
              height="100%"
              ref={playerRef}
              playing={false}
              muted={true}
              url={lesson?.link ? lesson.link : DEFAULT_SRC_VIDEO}
              type="video/hls"
              controls
              onProgress={progress => {
                progressTime(progress.playedSeconds);
              }}
              pip={true}
              playbackRate={playbackRate}
            />
          </VideoWrapper>
        </LessonsDataWrapper>
      )}
    </>
  );
};
