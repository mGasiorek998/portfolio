import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { BurgerButton, BurgerLine } from './Burger.styles';
import { AriaDescription } from 'assets/styles/styles';

interface BurgerProps {
  isMenuOpen: boolean;
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ isMenuOpen, openMenu }: BurgerProps) => {
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });
    if (!tl.current) return;

    tl.current
      .to(
        [burgerRef.current?.children[0]],
        {
          y: 12,
          duration: 0.2,
        },
        0
      )
      .to(
        [burgerRef.current?.children[2]],
        {
          y: -12,
          duration: 0.2,
        },
        0
      );
  }, []);
  const handleClick = () => {
    openMenu((prevState) => !prevState);

    if (!isMenuOpen) tl.current?.play();
    else tl.current?.reverse();
  };
  return (
    <>
      <BurgerButton
        ref={burgerRef}
        onClick={handleClick}
        aria-labelledby="burger"
      >
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerButton>
      <AriaDescription id="burger">{`Menu open button. ${
        isMenuOpen ? 'Menu Opened.' : 'Menu Closed.'
      }`}</AriaDescription>
    </>
  );
};

export default Burger;
