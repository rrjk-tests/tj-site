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
import { project } from './../../../shared/Theatre/index';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export function Clickable () {
  const { scaleX, scaleY, opacity } = useTheatre('Button', ['scaleX', 'scaleY', 'opacity'], TLClickable);
  const { textScale, textX } = useTheatre('Text', ['textScale', 'textX'], TLClickable);

  const onClick = () => {
    project.ready.then(() => TLClickable.play())
  }

  return (
    <Button
      onClick={onClick}
      style={{
        transform: `scale(${scaleX}, ${scaleY}) translate(0px, 0px)`,
        opacity
      }}
      textStyle={{
        display: 'block',
        transform: `scale(${textScale}) translateX(${0}px)`
      }}
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