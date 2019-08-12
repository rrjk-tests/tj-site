import React from "react"
import StringsToSpans from "../StringsToSpans"
import "./style.scss"

interface IProps {
  title?: string[]
  description?: string[]
  addtitionalClassname?: string
  contentAlignment?: "right-aligned" | "left-aligned" | "center"
}

export default function SectionContent({
  title = [],
  description = [],
  addtitionalClassname: className = "",
  contentAlignment: direction = "left-aligned"
}: IProps) {
  const directionModifier = `section-info--${direction}`
  return (
    <div className={`section-info ${directionModifier} ${className}`}>
      <h2 className="section-info__title">
        <StringsToSpans text={title} />
      </h2>
      <p className="section-info__desc">
        <StringsToSpans text={description} />
      </p>
    </div>
  )
}
