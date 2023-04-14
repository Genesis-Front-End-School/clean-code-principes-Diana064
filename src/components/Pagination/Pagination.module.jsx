import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export const Button = styled.button`
  width: 50px;
  height: 50px;

  border: 2px solid;
  border-radius: 50%;

  color: ${p => p.theme.colors.text};
  background-color: white;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    color: ${p => p.theme.colors.border};
    border-color: ${p => p.theme.colors.border};
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px auto;
  gap: 20px;

  text-align: center;
`;
export const PrevPage = styled(FiArrowLeft)`
  width: 25px;
  height: 25px;
`;
export const NextPage = styled(FiArrowRight)`
  width: 25px;
  height: 25px;
`;
