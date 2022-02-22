import { FigureEnum } from 'assets/shared/enums';
import { StyledSVG } from './Figure.styles';

interface FigureProps {
  height: string;
  width: string;
  cx?: string;
  cy?: string;
  r?: string;
  figure: FigureEnum;
}

const Figure = ({ height, width, cx, cy, r, figure }: FigureProps) => {
  return (
    <StyledSVG height={height} width={width}>
      {figure === FigureEnum.Circle ? (
        <circle cx={cx} cy={cy} r={r} />
      ) : (
        <rect height={height} width={width} />
      )}
    </StyledSVG>
  );
};

export default Figure;
