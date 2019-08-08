import React from 'react';

import './style.scss';
import Loading from '../Loading';

interface IProps {
  styleType?: 'primary' | 'secondary' | 'tertiary' | 'fourth',
  hasOutline?: boolean,
  text: string,
  type?: "button" | "submit",
  className?: string,
  color?: string,
  loading?: boolean,
  isDisabled?: boolean,
  textStyle?: any
  [key: string]: any
}

export default function Button({ styleType = 'primary', isDisabled = false, textStyle = {}, hasOutline = false, text = '', type = 'button', className, color, loading = false, ...props }: IProps){
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
      type={type}
      disabled={isDisabled}
      {...props}
    >
      { loading ? <Loading /> : <span style={textStyle}>{text}</span> }
    </button>
  );
}
