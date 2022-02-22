import styled from 'styled-components';
import { StyledSection } from 'assets/styles/styles';

export const WelcomeHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 100;
  letter-spacing: 6px;

  span {
    font-family: 'Cardo';
  }
`;

export const StyledWelcomeSection = styled(StyledSection)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;
