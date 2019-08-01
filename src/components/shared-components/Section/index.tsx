import React from 'react';

import './style.scss';

interface IProps {
  line?: string,
  children: React.ReactNode
}

export default function Section({ line, children }: IProps) {
  return (
    <section className="section">
      <div className="section__layout">
        { children }
      </div>
      { line }
    </section>
  );
}