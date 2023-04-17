import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const CourseTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;

  color: ${p => p.theme.colors.title};

  margin-top: ${p => p.theme.gap[3]}px;
  margin-bottom: ${p => p.theme.gap[0]}px;
`;
export const TextWrapper = styled.div`
  padding: ${p => p.theme.gap[5]}px;
`;
export const TextSubtitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-right: ${p => p.theme.gap[0]}px;
  list-style-type: disc;
`;
export const SkillsList = styled.ul`
  margin-left: 10px;
`;
export const SkillsItem = styled.li`
  display: flex;
  align-items: center;

  gap: 10px;
`;
export const SkillsIcon = styled(AiOutlineCheckCircle)`
  width: 25px;
  height: 25px;

  color: ${p => p.theme.colors.border};
`;
