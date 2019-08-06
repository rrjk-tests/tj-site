import React from 'react';

import './style.scss';

import shootingStarSVG from './shooting-star.svg';

interface IProps {
  right?: number | string,
  top?: number | string,
  left?: number | string,
  bottom?: number | string,
  isVertical?: boolean,
  isReversed?: boolean,
}

export default function ShootingStar({ right = 'auto', top = 'auto', left = 'auto', bottom = 'auto', isVertical = false, isReversed = false }: IProps){
  const customStyles = { top, right, left, bottom }
  const isVerticalModifier = isVertical ? ' shooting-star--vertical' : '';
  const isReversedModifier = isReversed ? ' shooting-star--reversed' : '';
  return (
    <div
      style={customStyles}
      className={`shooting-star${isVerticalModifier}${isReversedModifier}`}
    >
      <img
        src={shootingStarSVG}
        alt="shooting stars"
      />
    </div>
  );
}