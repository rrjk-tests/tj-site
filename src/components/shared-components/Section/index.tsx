import React from 'react';

import './style.scss';
import Line from './Line';

interface IProps {
  line?: string,
  children: React.ReactNode,
  hasGlown?: boolean,
}

export default function Section({ line, children, hasGlown = false }: IProps) {
  const hasGlownClass = hasGlown ? ' section--glown' : ''
  return (
    <section className={`section${hasGlownClass}`}>
      <div className="section__layout">
        { children }
      </div>
      { line ? <Line
        className="section__line"
        svg={line}
        alt='svg line'
      /> : null}
    </section>
  );
}