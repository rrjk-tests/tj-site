import React from 'react';

import Button from '../../shared-components/Button';
import Section from '../../shared-components/Section';

import logo from './logo.svg';
import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

interface IProps extends IInfo {
  button: string,
}

export default function HeadingSection({ title = [], description = [], button = ''}: IProps) {
  return (
    <Section>
      <div className="heading-section">
        <img
          className="heading-section__logo"
          src={logo}
          alt="TheatreJS logo"
        />
        <SectionInfo
          title={title}
          description={description}
        />
        <div className="heading-section__action">
          <Button
            text={button}
          />
        </div>
      </div>
    </Section>
  );
}