import { useEffect, useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import { AriaDescription, TextContainer } from 'assets/styles/styles';
import { StyledLink } from './Link.styles';

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {}

const Link = ({ children, ...props }: LinkProps) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    if (!tl.current) return;
    const lettersArray = Array.from(
      linkRef.current?.children as HTMLCollectionOf<HTMLElement>
    );

    tl.current
      .to(lettersArray, {
        y: '-105%',
        stagger: 0.09,
        duration: 0.4,
        ease: Power2.easeOut,
      })
      .set(lettersArray, {
        y: '150%',
      })
      .to(lettersArray, {
        y: '0',
        stagger: 0.09,
        duration: 0.4,
        ease: Power2.easeOut,
      });
  }, []);

  return (
    <TextContainer>
      <StyledLink
        aria-labelledby={`${children as string}_descrp`}
        ref={linkRef}
        onMouseEnter={() => tl.current?.play()}
        onMouseLeave={() => tl.current?.reverse()}
        {...props}
      >
        {Array.from(children as string).map((letter, i) => (
          <span aria-hidden="true" key={i}>
            {letter.toUpperCase()}
          </span>
        ))}
      </StyledLink>
      <AriaDescription id={`${children as string}_descrp`}>
        {children}
      </AriaDescription>
    </TextContainer>
  );
};

export default Link;
