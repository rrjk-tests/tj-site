import React from 'react';

import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';
import Button from '../../shared-components/Button';

import './style.scss';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import mobileLineSVG from './mobileLine.svg';
import ShootingStar from '../../shared-components/ShootingStar';
import Dot from '../../shared-components/Dot';
import { useTheatre } from '@theatre/hooks';
import { TLClickable, TLHoverable, TLSeletable } from '../../../shared/Theatre';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export function Clickable () {
  const { scale } = useTheatre('Clickable Button', ['scale'], TLClickable);

  return (
    <Button
      onMouseDown={console.log}
      text={clickMe} />
  )
}

export function Hoverable () {
  const { scale } = useTheatre('Hoverable Button', ['scale'], TLHoverable);

  return (
    <Button
      text={hoverMe}
      styleType="secondary"
      hasOutline
    />
  )
}

export function Selectable () {
  const { scale } = useTheatre('Selectable Button', ['scale'], TLSeletable);

  return (
    <Button
      text={selectMe}
      styleType="fourth"
      hasOutline
    />
  )
}

export default function FluidSection(){

  return (
    <Section line={lineSVG} mobileLine={mobileLineSVG}>
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
          <Dot top="7rem" type="tertiary" left="50%" />
          <Dot top="16rem" type="tertiary" left="50%" />
          <Clickable />
          <Hoverable />
          <Selectable />
        </div>
      </div>
    </Section>
  );
}