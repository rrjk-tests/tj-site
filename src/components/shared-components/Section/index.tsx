import React from 'react';

import './style.scss';

interface IProps {
  line?: string,
  children: React.ReactNode
}

export default function Section({ line, children }: IProps) {
  return (
    <section className="section">
      { line ? <div className="section__line">
        { line }
      </div> : null }
      <div className="section__layout">
        { children }
      </div>
    </section>
  );
}