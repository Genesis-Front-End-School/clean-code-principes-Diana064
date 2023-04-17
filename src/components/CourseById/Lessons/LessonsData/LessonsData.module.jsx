//
import styled from 'styled-components';

export const TextSubtitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-right: ${p => p.theme.gap[0]}px;
`;

export const Img = styled.img`
  display: flex;

  width: 100%;
  height: auto;

  margin: 0 auto;
`;
export const LessonsDataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 250px;

  @media (max-width: 400px) {
    min-width: 270px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const VideoWrapper = styled.div`
  @media (max-width: 400px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const Text = styled.p`
  margin-bottom: 5px 0;
`;
