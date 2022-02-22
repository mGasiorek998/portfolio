import React from 'react';
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

const Figure = React.forwardRef<SVGSVGElement, FigureProps>(
  ({ height, width, cx, cy, r, figure }, ref) => {
    return (
      <StyledSVG height={height} width={width} ref={ref}>
        {figure === FigureEnum.Circle ? (
          <circle cx={cx} cy={cy} r={r} />
        ) : (
          <rect height={height} width={width} />
        )}
      </StyledSVG>
    );
  }
);

export default Figure;
