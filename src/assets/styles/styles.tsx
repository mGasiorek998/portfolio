import styled from 'styled-components';
import { FontFamilies } from 'assets/shared/enums';

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

interface FontFamilyProp {
  fontFamily?: FontFamilies;
}

export const BlueText = styled.span<FontFamilyProp>`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ fontFamily }) =>
    fontFamily === FontFamilies.Cardo ? 'Cardo' : 'Montserrat'};
`;

export const TextContainer = styled.span`
  display: block;
  overflow: hidden;
`;

export const TextContainerCentered = styled(TextContainer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
