import React, { useEffect, useState } from 'react';

import './style.scss';
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
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const modifyWindowWidth = () => setInnerWidth(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize', modifyWindowWidth)
    return () => window.removeEventListener('resize', modifyWindowWidth)
  });
  return (
    <section style={{backgroundImage: `url(${innerWidth > 800 ? line : mobileLine})`}} className={`section${hasGlownModifier}${hasLineModifier}`}>
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