import { useRef, useEffect } from 'react';
import gsap, { Expo } from 'gsap';
import { FontFamilies } from 'assets/shared/enums';
import { BlueText, TextContainer } from 'assets/styles/styles';
import { StyledHeader } from './Header.styles';

const Header = () => {
  const subheadingRef = useRef<HTMLHeadingElement | null>(null);
  const headingRef1 = useRef<HTMLHeadingElement | null>(null);
  const headingRef2 = useRef<HTMLHeadingElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    if (!tl.current) return;
    tl.current.from(subheadingRef.current, {
      y: '105%',
      duration: 0.35,
      delay: 4.5,
    });
    tl.current.from(
      [headingRef1.current, headingRef2.current],
      {
        y: '105%',
        duration: 0.7,
        stagger: 0.1,
      },
      '-=0.2'
    );
  }, []);

  return (
    <StyledHeader>
      <TextContainer>
        <h3 ref={subheadingRef}>MICHAL GASIOREK</h3>
      </TextContainer>
      <TextContainer>
        <h1 ref={headingRef1}>
          <BlueText fontFamily={FontFamilies.Cardo}>FRONT</BlueText>-END
        </h1>
      </TextContainer>
      <br />
      <TextContainer>
        <h1 ref={headingRef2}>
          <BlueText fontFamily={FontFamilies.Cardo}>DEV</BlueText>ELOPER
        </h1>
      </TextContainer>
    </StyledHeader>
  );
};

export default Header;
