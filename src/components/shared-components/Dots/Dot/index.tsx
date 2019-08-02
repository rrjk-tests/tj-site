import React from 'react';

import './style.scss';

interface IProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'white' | string,
  left?: string,
  top?: string,
}

export default function Dot({ type = 'primary', left = "0px", top = "0px" }: IProps){
  const isSecondaryModifier = type === 'secondary' ? ' dot--secondary' : '';
  const isTertiaryModifier = type === 'tertiary' ? ' dot--tertiary' : '';
  const isWhiteModifier = type === 'white' ? ' dot--white' : '';
  const customStyles = { left, top };
  return (
    <div
      style={customStyles}
      className={`dot${isSecondaryModifier}${isTertiaryModifier}${isWhiteModifier}`}
    />
  );
}