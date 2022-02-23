import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.xs};
  overflow: hidden;
  position: relative;

  span {
    overflow: hidden;
    display: inline-block;
    font-family: 'Cardo';
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid black;
  }

  &:focus {
    border-left: 4px solid ${({ theme }) => theme.colors.blue};
    border-right: 4px solid ${({ theme }) => theme.colors.blue};
  }
`;
