import React, { useState } from 'react';

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
import { TLClickable, TLHoverable } from '../../../shared/Theatre';
import { project } from './../../../shared/Theatre/index';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export function Clickable () {
  const { scaleX, scaleY, opacity } = useTheatre('Button', ['scaleX', 'scaleY', 'opacity'], TLClickable);
  const { textScale, shadowSize, shadowAlpha } = useTheatre('Text', ['textScale', 'shadowSize', 'shadowAlpha'], TLClickable);
  const circle = useTheatre('Circle', ['width', 'height', 'opacity'], TLClickable);

  const onMouseDown = () => {
    project.ready.then(() => TLClickable.play({ range: {from: 0, to: 140}}))
  }
  const onMouseUp = () => {
    project.ready.then(() => TLClickable.play())
  }

  return (
    <Button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{
        transform: `scale(${scaleX}, ${scaleY}) translate(0px, 0px)`,
        opacity
      }}
      textStyle={{
        display: 'block',
        transform: `transform(-50%, -50%) scale(${textScale})`,
        textShadow: `0 0 ${shadowSize}px rgba(0, 0, 0, ${shadowAlpha})`
      }}
      text={clickMe}>
        <div className="button--circle" style={circle} />
      </Button>
  )
}

export function Hoverable () {
  const [hover, setHover] = useState(false)

  const circleOne = useTheatre('CircleOne', ['marginLeft', 'marginTop', 'size', 'opacity'], TLHoverable);
  const circleTwo = useTheatre('CircleTwo', ['marginLeft', 'marginTop', 'size', 'opacity'], TLHoverable);
  const circleThree = useTheatre('CircleThree', ['marginLeft', 'marginTop', 'size', 'opacity'], TLHoverable);
  const CircleFour = useTheatre('CircleFour', ['marginLeft', 'marginTop', 'size', 'opacity'], TLHoverable);

  const onMouseEnter = () => {
    setHover(true)
    project.ready.then(() => TLHoverable.play())
  }
  const onMouseLeave = () => {
    setHover(false)
    setTimeout(() => TLHoverable.time = 0,200)
  }

  return (
    <Button
      className="Hoverable"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      text={hoverMe}
      styleType="secondary"
      hasOutline>
        <div className={"button--circles-container" + (hover ? " show" : "")}>
          <div className="button--circle" style={{...circleOne, width: circleOne.size, height: circleOne.size}} />
          <div className="button--circle" style={{...circleTwo, width: circleTwo.size, height: circleTwo.size}} />
          <div className="button--circle" style={{...circleThree, width: circleThree.size, height: circleThree.size}} />
          <div className="button--circle" style={{...CircleFour, width: CircleFour.size, height: CircleFour.size}} />
        </div>
    </Button>
  )
}

export function Selectable () {


  return (
    <Button
      className="Selectable"
      styleType="fourth"
      hasOutline
      text="Select me"
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