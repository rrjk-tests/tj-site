import React from "react"

import "./style.scss"
import {useMobile} from "../../../shared/useMobile"

interface IProps {
  line?: string
  mobileLine?: string
  children: React.ReactNode
  hasGlow?: boolean
}

export default function Section({
  line,
  mobileLine,
  children,
  hasGlow: hasGlow = false
}: IProps) {
  const hasGlowModifier = hasGlow ? " section--glow" : ""
  const hasLineModifier = !line && !mobileLine ? " section--without-line" : ""

  const {isMobile} = useMobile()

  const style =
    line && mobileLine
      ? {backgroundImage: `url(${isMobile ? mobileLine : line})`}
      : {}
  return (
    <section
      style={style}
      className={`section${hasGlowModifier}${hasLineModifier}`}
    >
      <div className="section__layout">{children}</div>
      {/* { line ? <Line
        className="section__line"
        svg={line}
        alt='svg line'
      /> : null} */}
    </section>
  )
}
