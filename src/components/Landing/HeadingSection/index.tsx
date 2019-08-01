import React from 'react';

import Section from '../../shared-components/Section';

import logo from './logo.svg';
import './style.scss';

export default function HeadingSection() {
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
            <span>Artistry</span>
            <span>
              done easily
            </span>
          </h2>
          <p className="heading-section__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Section>
  );
}