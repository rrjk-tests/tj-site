import React from 'react';

import './style.scss';

interface IProps {
  isSecondary?: boolean,
  isOutline?: boolean,
  text: string,
  onClick?: () => void | null,
  type?: "button" | "submit",
  className?: string,
  color?: string,
}

export default function Button({ isSecondary = false, isOutline = false, text = '', type = 'button', className, color, onClick = ()=>{} }: IProps){
  let customStyle = {};
  if(isOutline && color) customStyle = { borderColor: color };
  if(!isOutline && color) customStyle = { backgroundColor: color };
  const outlineModifier = isOutline ? ' button--outline' : '';
  const secondaryModifier = isSecondary ? ' button--secondary' : '';
  return (
    <button
      style={customStyle}
      className={`button${outlineModifier}${secondaryModifier} ${className ? className : ''}`}
      onClick={onClick}
      type={type}
    >
      { text }
    </button>
  );
}
