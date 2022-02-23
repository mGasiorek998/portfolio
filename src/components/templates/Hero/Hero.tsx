import { useRef, useEffect } from 'react';
import gsap, { Expo } from 'gsap';
import { FigureEnum } from 'assets/shared/enums';
import {
  BackgroundContainer,
  StyledSection,
  ForegroundContainer,
  TextContainerCentered,
} from 'assets/styles/styles';
import Figure from 'components/atoms/Figure/Figure';
import Header from 'components/organisms/Header/Header';
import Menu from 'components/molecules/Menu/Menu';
import { StyledParagraph } from './Hero.styles';

const Hero = () => {
  const figureRef = useRef<SVGSVGElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    if (!tl.current) return;

    tl.current.from(figureRef.current, {
      x: '-100%',
      duration: 2.5,
      delay: 4,
      ease: Expo.easeOut,
    });
  }, []);
  return (
    <StyledSection>
      <BackgroundContainer>
        <Figure
          ref={figureRef}
          height="100vh"
          width="100vw"
          cx="0"
          cy="50%"
          r="50%"
          figure={FigureEnum.Circle}
        />
      </BackgroundContainer>
      <ForegroundContainer>
        <Menu />
        <Header />
      </ForegroundContainer>
      <StyledParagraph>minimalist with an eye for the details.</StyledParagraph>
    </StyledSection>
  );
};

export default Hero;
