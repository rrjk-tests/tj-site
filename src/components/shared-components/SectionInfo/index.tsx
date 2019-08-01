import React from 'react';

import StringSpanizy from '../../shared-components/StringSpanizy';

import './style.scss';

interface IProps {
  title?: string[],
  description?: string[],
}

export default function SectionInfo({ title = [], description = [] }: IProps){
  return (
    <div className="heading-section__content">
      <h2 className="heading-section__title">
        <StringSpanizy
          text={title}
        />
      </h2>
      <p className="heading-section__desc">
        <StringSpanizy
          text={description}
        />
      </p>
    </div>
  );
}