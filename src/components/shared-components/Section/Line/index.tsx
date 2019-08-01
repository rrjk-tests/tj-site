import React from 'react';

import './style.scss';

interface IProps {
  svg: string,
  alt: string,
  className?: string,
}

export default function Line({ svg, alt, className = '' }: IProps){
  return (
    <img
      className={`line ${className}`}
      src={svg}
      alt={alt}
    />
  );
}