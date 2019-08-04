import React, { useState, useEffect } from 'react';

import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import Dot from '../../shared-components/Dot';
import ControlBox from './ControlBox';
import { project } from '../../../shared/Theatre';

const { info } = sections.control;

interface IKeyframe {
  time: number
  value: number
}

interface ICursor {
  x: number
  y: number
}

const useTheatre = (timelineName: string) => {
  const [keyframeOne, setKeyframeOne] = useState<IKeyframe>({ time: 0, value: 0 })
  const [keyframeTwo, setKeyframeTwo] = useState<IKeyframe>({ time: 0, value: 0 })
  const [cursor, setCursor] = useState<ICursor>({ x: 0, y: 0 })

  useEffect(() => {
    const timeline = project.getTimeline(timelineName)
    const keyframeOneObject = timeline.getObject('Keyframe One', {}, {
      props: {
        time: { type: 'number' },
        value: { type: 'number' }
      }
    })
    const keyframeTwoObject = timeline.getObject('Keyframe Two', {}, {
      props: {
        time: { type: 'number' },
        value: { type: 'number' }
      }
    })
    const cursorObject = timeline.getObject('Cursor', {}, {
      props: {
        x: { type: 'number' },
        y: { type: 'number' }
      }
    })
    keyframeOneObject.onValuesChange((values) => setKeyframeOne(values as any))
    keyframeTwoObject.onValuesChange((values) => setKeyframeTwo(values as any))
    cursorObject.onValuesChange((values) => setCursor(values as any))
  }, [timelineName])

  return {
    keyframeOne,
    keyframeTwo,
    cursor
  }
}

export default () => {
  const {keyframeOne, keyframeTwo, cursor} = useTheatre('Control Box')

  return (
    <Section line={lineSVG}>
      <div className="control-section">
        <Dot top="-2rem" left="35%" />
        <SectionInfo
          isRTL
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