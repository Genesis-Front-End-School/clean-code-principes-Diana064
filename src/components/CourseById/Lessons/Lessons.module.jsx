import styled from 'styled-components';
import { FiLock, FiUnlock } from 'react-icons/fi';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 800px;

  margin: 0 auto;
  padding: ${p => p.theme.gap[4]}px;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.backCourse};

  border: ${p => p.theme.borders.big};
  border-color: ${p => p.theme.colors.border};
  border-radius: 10px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    transform: scale(1.05);
    border-color: ${p => p.theme.colors.border};
  }
`;
export const LockIcon = styled(FiLock)`
  width: 20px;
  height: 20px;

  color: ${p => p.theme.colors.border};

  margin-right: 15px;
`;
export const UnLockIcon = styled(FiUnlock)`
  width: 20px;
  height: 20px;

  color: ${p => p.theme.colors.border};

  margin-right: 15px;
`;
export const Button = styled.button`
  display: flex;
  align-items: flex-start;

  font-family: 'Montserrat', sans-serif;
  font-size: ${p => p.theme.fontSizes.m};
  text-align: inherit;

  padding: 0;
  margin-bottom: 10px;

  border: none;

  background: none;

  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
  }
`;
export const LockedLesson = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const CourseTitle = styled.h2`
  margin: 0 auto;
  margin-bottom: ${p => p.theme.gap[0]}px;

  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;

  color: ${p => p.theme.colors.title};
`;
export const LessonsList = styled.ul`
  width: 100%;
  margin: 0 auto;
`;
export const LessonsListItem = styled.li``;
