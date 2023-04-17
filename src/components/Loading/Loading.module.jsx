import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 200px;
  gap: ${p => p.theme.gap[4]}px;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.xl};
`;
