import React from 'react';

import './style.scss';

interface IProps {
  isSecondary?: boolean,
  isOutline?: boolean,
  text: string,
  onClick?: () => void | null,
  type?: "button" | "submit",
  className?: string,
}

export default function Button({ isSecondary = true, isOutline = false, text = '', type = 'button', className, onClick = ()=>{} }: IProps){
  const outlineModifier = isOutline ? ' button--outline' : '';
  const secondaryModifier = isSecondary ? ' button--secondary' : '';
  return (
    <button
      className={`button${outlineModifier}${secondaryModifier} ${className}`}
      onClick={onClick}
      type={type}
    >
      { text }
    </button>
  );
}
