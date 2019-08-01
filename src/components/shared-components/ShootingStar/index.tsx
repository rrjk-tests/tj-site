import React from 'react';

import './style.scss';

import shootingStarSVG from './shooting-star.svg';

interface IProps {
  left?: string,
  top?: string,
  isVertical?: boolean,
}

export default function ShootingStar({ left = '0px', top = '0px', isVertical = false }: IProps){
  const customStyles = { top, left }
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