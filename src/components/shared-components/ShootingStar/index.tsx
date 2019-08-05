import React from 'react';

import './style.scss';

import shootingStarSVG from './shooting-star.svg';

interface IProps {
  right?: number,
  top?: number,
  isVertical?: boolean,
}

export default function ShootingStar({ right = 0, top = 0, isVertical = false }: IProps){
  const customStyles = { top, right }
  const isVerticalModifier = isVertical ? ' shooting-star--vertical' : '';
  return (
    <div
      style={customStyles}
      className={`shooting-star${isVerticalModifier}`}
    >
      <img
        src={shootingStarSVG}
        alt="shooting stars"
      />
    </div>
  );
}