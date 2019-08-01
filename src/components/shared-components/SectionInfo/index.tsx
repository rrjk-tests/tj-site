import React from 'react';

import StringSpanizy from '../../shared-components/StringSpanizy';

import './style.scss';

import glowSVG from './glow.svg';

interface IProps {
  title?: string[],
  description?: string[],
  className?: string,
  isRTL?: boolean,
}

export default function SectionInfo({ title = [], description = [], className = '', isRTL = true }: IProps){
  const RTLModifier = isRTL ? ' section-info--rtl' : ''
  return (
    <div className={`section-info${RTLModifier} ${className}`}>
      <img
        className="section-info__glow"
        src={glowSVG}
        alt="glow"
      />
      <h2 className="section-info__title">
        <StringSpanizy
          text={title}
        />
      </h2>
      <p className="section-info__desc">
        <StringSpanizy
          text={description}
        />
      </p>
    </div>
  );
}