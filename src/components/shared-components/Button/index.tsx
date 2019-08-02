import React from 'react';

import './style.scss';

interface IProps {
  styleType?: 'primary' | 'secondary' | 'tertiary',
  hasOutline?: boolean,
  text: string,
  onClick?: () => void | null,
  type?: "button" | "submit",
  className?: string,
  color?: string,
}

export default function Button({ styleType = 'primary', hasOutline = false, text = '', type = 'button', className, color, onClick = ()=>{} }: IProps){
  let customStyle = {};
  if(hasOutline && color) customStyle = { borderColor: color };
  if(!hasOutline && color) customStyle = { backgroundColor: color };
  const outlineModifier = hasOutline ? ' button--outline' : '';
  const styleModifier = ` button--${styleType}`;
  return (
    <button
      style={customStyle}
      className={`button${outlineModifier}${styleModifier} ${className ? className : ''}`}
      onClick={onClick}
      type={type}
    >
      { text }
    </button>
  );
}
