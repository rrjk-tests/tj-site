import React, {useEffect} from "react"
import {useTheatre} from "@theatre/hooks"

import Section from "../../shared-components/Section"

import "./style.scss"
import SectionContent from "../../shared-components/SectionContent"

import {sections} from "../../../locale/en"

import lineSVG from "./line.svg"
import Dot from "../../shared-components/Dot"
import ControlBox from "./ControlBox"
import mobileLineSVG from "./mobileLine.svg"
import {TLControlBox, project} from "../../../shared/Theatre"
import ShootingStar from "../../shared-components/ShootingStar"

const {info} = sections.control

export default () => {
  const keyframeOne = useTheatre(
    "Keyframe One",
    ["time", "value"],
    TLControlBox
  )
  const keyframeTwo = useTheatre(
    "Keyframe Two",
    ["time", "value"],
    TLControlBox
  )
  const cursor = useTheatre("cursor", ["x", "y"], TLControlBox)

  useEffect(() => {
    project.ready.then(() => TLControlBox.play({iterationCount: Infinity}))
    return () => TLControlBox.pause()
  }, [])

  return (
    <Section line={lineSVG} mobileLine={mobileLineSVG}>
      <div className="control-section">
        <Dot top="23%" left="38%" type="tertiary" />
        <ShootingStar isVertical left={28} bottom={72} />
        <SectionContent
          contentAlignment="right-aligned"
          addtitionalClassname="control-section__content"
          {...info}
        />
        <div className="control-section__control-box">
          <ControlBox
            cursor={cursor}
            keyframes={[{...keyframeOne, biasInX: -15}, {...keyframeTwo}]}
          />
        </div>
      </div>
    </Section>
  )
}
