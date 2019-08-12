import React from "react"

import StringsToSpans from "../../shared-components/StringsToSpans"

import "./style.scss"

interface IProps {
  title?: string[]
  description?: string[]
  className?: string
  direction?: "rtl" | "ltr" | "center"
}

export default function SectionInfo({
  title = [],
  description = [],
  className = "",
  direction = "ltr"
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
