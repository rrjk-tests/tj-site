import React from "react"

import Section from "../../shared-components/Section"

import "./style.scss"
import SectionInfo from "../../shared-components/SectionInfo"

import {sections} from "../../../locale/en"

import lineSVG from "./line.svg"
import mobileLineSVG from "./mobileLine.svg"
import Dot from "../../shared-components/Dot"
import BouncingBall from "./BouncingBall"
import {useMobile} from "../../../shared/useMobile"

const {info} = sections.easyAnimation

export default function EasyAnimationSection() {
  const {isMobile} = useMobile()

  return (
    <Section line={lineSVG} mobileLine={mobileLineSVG}>
      <div className="easy-animation-section">
        {!isMobile ? <Dot bottom={0} left="45%" type="primary" /> : null}
        <Dot top={0} type="tertiary" left={20} />
        <SectionInfo
          direction="rtl"
          className="easy-animation-section__content"
          {...info}
        />
        <BouncingBall />
      </div>
    </Section>
  )
}
