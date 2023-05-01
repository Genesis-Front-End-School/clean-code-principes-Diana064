import React from 'react';
import { useProgressTime } from 'components/hooks/UseProgressTime';
import { usePlaybackRate } from 'components/VideoSpeed/VideoSpeed';
import { InstructionVolume } from './InstructionVolume/InstructionVolume';
import { CourseData } from './CourseData/CourseData';
import { DEFAULT_SRC_VIDEO } from 'variables/constants';
import { Lessons } from './Lessons/Lessons';
import { CourseType } from 'types/ComponentsType';

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

interface SkillsAndTagsDetailsProps {
  course: CourseType;
  handleGoBack: () => void;
  isLoading?: boolean;
}

export const CourseById: React.FC<SkillsAndTagsDetailsProps> = ({
  course,
  handleGoBack,
}) => {
  const { playerRef, progressTime } = useProgressTime();
  const playbackRate = usePlaybackRate(1);

  const src = course?.meta?.courseVideoPreview?.link
    ? course.meta.courseVideoPreview.link
    : DEFAULT_SRC_VIDEO;

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
