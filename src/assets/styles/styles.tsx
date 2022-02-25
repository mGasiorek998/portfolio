import styled from 'styled-components';
import { FontFamilies } from 'assets/shared/enums';

export const BackgroundContainer = styled.div`
  margin: -8px -8px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  @media ${({ theme }) => theme.devices.desktop} {
    margin: -32px -32px 0;
  }
`;

export const ForegroundContainer = styled.div`
  margin: 8px 8px 0;

  @media ${({ theme }) => theme.devices.desktop} {
    margin: 32px 32px 0;
  }
`;

export const StyledSection = styled.section`
  position: relative;
  min-height: calc(100vh - 32px);
  margin-bottom: 244px;
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

export const AriaDescription = styled.p`
  visibility: hidden;
  opacity: 0;
  font-size: 0;
`;
