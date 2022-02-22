import { FigureEnum } from 'assets/shared/enums';
import {
  BackgroundContainer,
  StyledSection,
  ForegroundContainer,
} from 'assets/styles/styles';
import Figure from 'components/atoms/Figure/Figure';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-family: 'Cardo';
    line-height: 100%;
    font-weight: lighter;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-family: 'Cardo';
`;

const Hero = () => {
  return (
    <StyledSection>
      <BackgroundContainer>
        <Figure
          height="100vh"
          width="100vw"
          cx="0"
          cy="50%"
          r="50%"
          figure={FigureEnum.Circle}
        />
      </BackgroundContainer>
      <ForegroundContainer>
        <StyledHeader>
          <h3>MICHAL GASIOREK</h3>
          <h1>
            <BlueText>FRONT</BlueText>-END
            <br />
            <BlueText>DEV</BlueText>ELOPER
          </h1>
        </StyledHeader>
      </ForegroundContainer>
    </StyledSection>
  );
};

export default Hero;
