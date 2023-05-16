import styled from 'styled-components';
export const Themebutton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 45px;
  border: 1px solid;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin: 5px 30px;
  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
    border-color: ${p => p.theme.colors.border};
  }
`;
