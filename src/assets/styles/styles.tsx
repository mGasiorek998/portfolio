import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  margin: -8px -8px 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;

  @media ${({ theme }) => theme.devices.tablet} {
    margin: -32px -32px 0;
  }
`;

export const ForegroundContainer = styled.div`
  margin: 8px 8px 0;

  @media ${({ theme }) => theme.devices.tablet} {
    margin: 32px 32px 0;
  }
`;

export const StyledSection = styled.section`
  position: relative;
  height: calc(100vh - 32px);
`;
