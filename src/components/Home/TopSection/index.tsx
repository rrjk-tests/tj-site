import React from "react"
import animateScrollTo from "animated-scroll-to"

import Button from "../../shared-components/Button"
import Section from "../../shared-components/Section"

import logo from "./logo.svg"
import "./style.scss"
import SectionContent from "../../shared-components/SectionContent"

import {sections} from "../../../locale/en"

import ShootingStar from "../../shared-components/ShootingStar"
import {useScrollbarCheck} from "../../../shared/os"

const {info, button} = sections.heading

const $ = (query: string) => document.querySelector(query)

export default function TopSection() {
  const haveUglyScroll = useScrollbarCheck()

  const scrollToLastSection = () => {
    let element
    const desiredElement = $(".signup-section") as HTMLElement
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
      <div className="top-section">
        <ShootingStar right={-70} />
        <ShootingStar isReversed left={72} />
        <img className="top-section__logo" src={logo} alt="Theatre.js" />
        <SectionContent
          contentAlignment="center"
          addtitionalClassname="top-section__content"
          {...info}
        />
        <div className="top-section__action">
          <Button onClick={scrollToLastSection} text={button} />
        </div>
      </div>
    </Section>
  )
}
