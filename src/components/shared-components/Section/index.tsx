import React, { ReactChildren } from 'react';

import './style.scss';

interface IProps {
  line?: string | null,
  children: React.ReactNode
}

export default function Section({ line = null, children }: IProps) {
  return (
    <section className="section">
      <div className="section__line">
        { line }
      </div>
      <div className="section__layout">
        { children }
      </div>
    </section>
  );
}