import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean;
}

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  margin-top: -8px;
  z-index: 1;

  @media ${({ theme }) => theme.devices.tablet} {
    position: static;
    height: auto;
    width: auto;
  }

  // burger
  button {
    margin: 16px 8px 0;
    position: absolute;
    right: 0;
  }
`;

export const StyledMenu = styled.ul<MenuProps>`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.white};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    transform: none;
    transition: none;
    background-color: transparent;
  }

  li:first-child {
    @media ${({ theme }) => theme.devices.tablet} {
      margin-right: 64px;
    }
  }

  li > a {
    text-align: center;
  }
`;
