import React from 'react';

import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';
import Button from '../../shared-components/Button';

import './style.scss';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import ShootingStar from '../../shared-components/ShootingStar';
import Dot from '../../shared-components/Dot';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export default function FluidSection(){
  return (
    <Section line={lineSVG}>
      <div className="fluid-section">
        <ShootingStar
          isVertical
          right={-135}
          top={62}
        />
        <SectionInfo
          {...info}
        />
        <div className="fluid-section__actions">
          <Dot top="6rem" type="white" left="50%" />
          <Dot top="13.5rem" left="50%" />
          <Button
            text={clickMe}
          />
          <Button
            text={hoverMe}
            hasOutline
          />
          <Button
            text={selectMe}
            hasOutline
          />
        </div>
      </div>
    </Section>
  );
}