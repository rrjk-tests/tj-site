import React, { useEffect, useState } from 'react';

import './style.scss';
import { useMobile } from '../../../shared/useMobile';
// import Line from './Line';

interface IProps {
  line?: string,
  mobileLine?: string,
  children: React.ReactNode,
  hasGlown?: boolean,
}

export default function Section({ line, mobileLine, children, hasGlown = false }: IProps) {
  const hasGlownModifier = hasGlown ? ' section--glown' : ''
  const hasLineModifier = !line && !mobileLine ? ' section--without-line' : '';
  
  const { isMobile } = useMobile()

  const style = (line && mobileLine) ? {backgroundImage: `url(${isMobile ? mobileLine : line})`} : {};
  return (
    <section style={style} className={`section${hasGlownModifier}${hasLineModifier}`}>
      <div className="section__layout">
        { children }
      </div>
      {/* { line ? <Line
        className="section__line"
        svg={line}
        alt='svg line'
      /> : null} */}
    </section>
  );
}