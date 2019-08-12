import React from "react"
import animateScrollTo from "animated-scroll-to"

import Button from "../../shared-components/Button"
import Section from "../../shared-components/Section"

import logo from "./logo.svg"
import "./style.scss"
import SectionInfo from "../../shared-components/SectionInfo"

import {sections} from "../../../locale/en"

import ShootingStar from "../../shared-components/ShootingStar"
import {useScrollbarCheck} from "../../../shared/os"

const {info, button} = sections.heading

const $ = (query: string) => document.querySelector(query)

export default function TopSection() {
  const haveUglyScroll = useScrollbarCheck()

  const scrollToGetAhead = () => {
    let element
    const desiredElement = $(".get-ahead") as HTMLElement
    if (!desiredElement) return
    if (haveUglyScroll) {
      const appEl = $(".app")
      if (!appEl) return
      element = appEl.parentElement
      if (!element) return
    } else {
      element = window
    }
    // Animating to go ahead section
    animateScrollTo(desiredElement, {
      element,
      onComplete: () => {
        const input = $(".join-us__input") as HTMLInputElement
        if (input) input.focus()
      }
    })
  }

  return (
    <Section hasGlow>
      <div className="heading-section">
        <ShootingStar right={-70} />
        <ShootingStar isReversed left={72} />
        <img className="heading-section__logo" src={logo} alt="Theatre.js" />
        <SectionInfo
          direction="center"
          className="heading-section__content"
          {...info}
        />
        <div className="heading-section__action">
          <Button onClick={scrollToGetAhead} text={button} />
        </div>
      </div>
    </Section>
  )
}
