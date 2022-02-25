import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-family: 'Cardo';
  font-style: italic;
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.blue};
  overflow: hidden;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  position: relative;
  max-height: 180px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  svg {
    position: absolute;
    right: 12%;
    transform: translateX(150%);
  }
`;
