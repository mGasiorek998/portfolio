import Burger from 'components/atoms/Burger/Burger';
import Link from 'components/atoms/Link/Link';
import { useState } from 'react';
import { StyledMenu, StyledNav } from './Menu.styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <Burger isMenuOpen={isOpen} openMenu={setIsOpen} />
        <StyledMenu isOpen={isOpen} aria-hidden={!isOpen}>
          <li>
            <Link href="https://github.com/" target="_blank">
              github
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/" target="_blank">
              linkedin
            </Link>
          </li>
        </StyledMenu>
      </StyledNav>
    </>
  );
};

export default Menu;
