import React from 'react';
import { useTheatre } from '@theatre/hooks'

import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import Dot from '../../shared-components/Dot';
import ControlBox from './ControlBox';
import { TLControlBox } from '../../../shared/Theatre';
import ShootingStar from '../../shared-components/ShootingStar';

const { info } = sections.control;

export default () => {
  const keyframeOne = useTheatre('Keyframe One', ['time', 'value'], TLControlBox)
  const keyframeTwo = useTheatre('Keyframe Two', ['time', 'value'], TLControlBox)
  const cursor = useTheatre('cursor', ['x', 'y'], TLControlBox)

  return (
    <Section line={lineSVG}>
      <div className="control-section">
        <Dot top="-2rem" left="35%" />
        <ShootingStar
          isVertical
          left={28}
          bottom={72}
        />
        <SectionInfo
          direction="rtl"
          className="control-section__content"
          {...info}
        />
        <div className="control-section__control-box">
          <ControlBox cursor={cursor} keyframes={[
            {...keyframeOne, biasInX: -15},
            {...keyframeTwo},
          ]} />
        </div>
      </div>
    </Section>
  );
}