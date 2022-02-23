import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap, { Expo } from 'gsap';
import { AriaDescription, TextContainerCentered } from 'assets/styles/styles';
import { StyledWelcomeSection, WelcomeHeading } from './Welcome.styles';

const str = 'welcome.';

const Welcome = () => {
  const welcomeHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const curtainRef = useRef<HTMLElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    if (!tl.current) return;

    const lettersArray = Array.from(
      welcomeHeadingRef.current?.children as HTMLCollectionOf<HTMLElement>
    );

    tl.current
      .from(lettersArray, {
        y: '105%',
        delay: 0.5,
        duration: 0.5,
        stagger: 0.1,
        ease: Expo.easeOut,
      })
      .to(lettersArray, {
        y: '-105%',
        delay: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: Expo.easeIn,
      })
      .to(curtainRef.current, {
        display: 'none',
        delay: 0.5,
        duration: 0,
      });
  }, []);

  return (
    <StyledWelcomeSection ref={curtainRef}>
      <TextContainerCentered>
        <WelcomeHeading ref={welcomeHeadingRef} aria-labelledby="welcome">
          {Array.from(str).map((letter, i) => (
            <span
              aria-hidden="true"
              style={{ display: 'inline-block' }}
              key={i}
            >
              {letter}
            </span>
          ))}
        </WelcomeHeading>
      </TextContainerCentered>
      <AriaDescription id="welcome">Welcome</AriaDescription>
    </StyledWelcomeSection>
  );
};

export default Welcome;
