import React from 'react';

import Button from '../../shared-components/Button';
import Section from '../../shared-components/Section';

import logo from './logo.svg';
import './style.scss';
import StringSpanizy from '../../shared-components/StringSpanizy';

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
        <div className="heading-section__action">
          <Button
            text={button}
          />
        </div>
      </div>
    </Section>
  );
}