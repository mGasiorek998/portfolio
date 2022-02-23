import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    font-family: 'Cardo';
    font-weight: lighter;
    line-height: 100%;
    font-size: ${({ theme }) => theme.fontSize.s};

    @media ${({ theme }) => theme.devices.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media ${({ theme }) => theme.devices.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxs};

    @media ${({ theme }) => theme.devices.tablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
