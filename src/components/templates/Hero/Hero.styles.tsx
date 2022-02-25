import styled from 'styled-components';

export const StyledParagraph = styled.p`
  position: absolute;
  bottom: 8px;
  width: calc(100% - 16px);
  text-align: center;

  @media ${({ theme }) => theme.devices.desktop} {
    width: calc(100% - 64px);
    bottom: 32px;
  }
`;
