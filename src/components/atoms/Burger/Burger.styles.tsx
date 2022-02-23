import styled from 'styled-components';

export const BurgerButton = styled.button`
  position: relative;
  padding: 0;
  height: 40px;
  width: 40px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;

  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

export const BurgerLine = styled.div`
  height: 8px;
  width: 100%;
  margin: 2px 0;
  background-color: ${({ theme }) => theme.colors.blue};
`;
