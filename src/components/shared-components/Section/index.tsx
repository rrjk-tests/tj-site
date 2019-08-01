import React from 'react';

import './style.scss';
import Line from './Line';

interface IProps {
  line: string,
  children: React.ReactNode
}

export default function Section({ line, children }: IProps) {
  return (
    <section className="section">
      <div className="section__layout">
        { children }
      </div>
      <Line
        className="section__line"
        svg={line}
        alt='svg line'
      />
    </section>
  );
}