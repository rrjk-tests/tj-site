import React from 'react';

import './style.scss';

interface IProps {
  isSecondary?: boolean,
  isOutline?: boolean,
  text: string,
  onClick?: () => void | null
}

export default function Button({ isSecondary = true, isOutline = false, text = '', onClick = ()=>{} }: IProps){
  const outlineModifier = isOutline ? ' button--outline' : '';
  const secondaryModifier = isSecondary ? ' button--secondary' : '';
  return (
    <button
      className={`button${outlineModifier}${secondaryModifier}`}
      onClick={onClick}
    >
      { text }
    </button>
  );
}
