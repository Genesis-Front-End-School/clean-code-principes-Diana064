import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const CourseTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;

  color: ${p => p.theme.colors.title};

  margin-bottom: ${p => p.theme.gap[0]}px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
export const TextSubtitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-right: ${p => p.theme.gap[0]}px;
`;
export const List = styled.ul`
  margin-left: 10px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;

  gap: 10px;
`;
export const SkillsIcon = styled(AiOutlineCheckCircle)`
  width: 25px;
  height: 25px;

  color: ${p => p.theme.colors.border};
`;
