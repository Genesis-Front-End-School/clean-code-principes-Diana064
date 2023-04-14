import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;

  height: 630px;

  padding: 10px;

  color: ${p => p.theme.colors.text};

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;

  margin-top: 30px;
  gap: ${p => p.theme.gap[5]}px;
`;
export const CourseItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 500px;

  background-color: ${p => p.theme.colors.backCourse};

  border: ${p => p.theme.borders.big};
  border-color: ${p => p.theme.colors.border};
  border-radius: 10px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  list-style: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:hover {
    transform: scale(1.05);
    border-color: ${p => p.theme.colors.border};
  }
  @media (max-width: 550px) {
    transform: scale(0.95);
    &:hover {
      transform: scale(1);
    }
  }
`;
export const CourseListWrapper = styled.div`
  margin: 30px auto;
`;
