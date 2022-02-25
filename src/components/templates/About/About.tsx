import { FigureEnum } from 'assets/shared/enums';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ForegroundContainer, StyledSection } from 'assets/styles/styles';
import Figure from 'components/atoms/Figure/Figure';
import { useRef, useEffect } from 'react';
import { StyledTitle, TitleContainer } from './About.styles';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const figureRef = useRef<SVGSVGElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top bottom',
      },
    });

    if (!tl.current) return;

    tl.current
      .to(
        figureRef.current,
        {
          x: 0,
          duration: 2,
          ease: Expo.easeInOut,
        },
        0
      )
      .from(
        headerRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
        },
        0
      );
  }, []);

  return (
    <StyledSection>
      <ForegroundContainer>
        <TitleContainer>
          <Figure
            ref={figureRef}
            height={'100%'}
            width={'580px'}
            figure={FigureEnum.Rectangle}
          />
          <StyledTitle ref={headerRef}>WHO AM I?</StyledTitle>
        </TitleContainer>
        <p style={{ width: '50%', fontSize: '3rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          tellus sed sapien aliquet aliquet blandit at purus. Fusce vel mollis
          neque, quis feugiat lectus. Proin eget turpis sit amet orci porta
          ultricies. Etiam et facilisis orci. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi lacinia
          sapien eu erat bibendum pretium. Donec sed orci dolor. Praesent
          scelerisque, est sit amet sagittis dapibus, mi nisl tincidunt lacus,
          vitae maximus nulla dolor at diam.
        </p>
      </ForegroundContainer>
    </StyledSection>
  );
};

export default About;
