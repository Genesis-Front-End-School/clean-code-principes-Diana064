import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { usePlaybackRate } from 'components/VideoSpeed/VideoSpeed';
import { useLocalStorage } from 'components/hooks/UseLocaleStorage';
import {
  TextSubtitle,
  Img,
  LessonsDataWrapper,
  VideoWrapper,
  Text,
} from './LessonsData.module';
export const LessonData = ({ lesson }) => {
  const [lessonPlayed, setLessonPlayed] = useLocalStorage('lessonTime', {
    playedSeconds: 0,
  });
  const playbackRate = usePlaybackRate(1);
  const lessonRef = useRef(null);
  const defaultSrc =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const img = lesson?.previewImageLink
    ? `${lesson.previewImageLink}/lesson-${lesson.order}.webp`
    : 'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png';

  useEffect(() => {
    if (lessonRef.current) {
      lessonRef.current.seekTo(lessonPlayed.playedSeconds);
    }
  }, [lessonPlayed.playedSeconds]);

  function lessonTime(e) {
    const progress = { ...lessonPlayed, playedSeconds: e };
    setLessonPlayed(progress);
  }
  console.log(lesson);
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
              ref={lessonRef}
              playing={false}
              muted={true}
              url={lesson?.link ? lesson.link : defaultSrc}
              type="video/hls"
              controls
              onProgress={progress => {
                lessonTime(progress.playedSeconds);
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
