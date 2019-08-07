import React from 'react';

import './style.scss';
import Loading from '../Loading';

interface IProps {
  styleType?: 'primary' | 'secondary' | 'tertiary' | 'fourth',
  hasOutline?: boolean,
  text: string,
  onClick?: () => void | null,
  type?: "button" | "submit",
  className?: string,
  color?: string,
  loading?: boolean,
  isDisabled?: boolean,
}

export default function Button({ styleType = 'primary', isDisabled = false, hasOutline = false, text = '', type = 'button', className, color, loading = false, onClick = ()=>{} }: IProps){
  let customStyle = {};
  if(hasOutline && color) customStyle = { borderColor: color };
  if(!hasOutline && color) customStyle = { backgroundColor: color };
  const outlineModifier = hasOutline ? ' button--outline' : '';
  const styleModifier = ` button--${styleType}`;
  const loadingModifier = loading ? ' button--loading' : '';
  const isDisabledModifier = isDisabled ? ' button--disabled' : '';
  return (
    <button
      style={customStyle}
      className={`button${outlineModifier}${styleModifier}${loadingModifier}${isDisabledModifier} ${className ? className : ''}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      { loading ? <Loading /> : text }
    </button>
  );
}
