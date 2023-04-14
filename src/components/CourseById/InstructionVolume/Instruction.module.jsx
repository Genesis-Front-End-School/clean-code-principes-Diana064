import styled from 'styled-components';
export const CourseTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  color: ${p => p.theme.colors.title};

  margin: ${p => p.theme.gap[5]}px auto;

  @media (max-width: 650px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media (max-width: 550px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const Button = styled.button`
  width: 300px;
  height: 50px;

  font-family: 'Montserrat', sans-serif;
  font-weight: ${p => p.theme.fontWeights.bold};

  border: ${p => p.theme.borders.normal};
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
    border-color: ${p => p.theme.colors.border};
  }
  @media (max-width: 650px) {
    width: 170px;
    height: 40px;
  }
`;
export const IntructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
