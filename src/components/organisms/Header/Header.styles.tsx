import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-family: 'Cardo';
    line-height: 90%;
    font-weight: lighter;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
