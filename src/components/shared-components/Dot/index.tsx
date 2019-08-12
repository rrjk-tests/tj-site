import React from "react"

import "./style.scss"

interface IProps {
  type?: "primary" | "secondary" | "tertiary" | "white" | string
  left?: number | string
  top?: number | string
  bottom?: number | string
  right?: number | string
}

export default function Dot({
  type = "primary",
  left = "auto",
  top = "auto",
  bottom = "auto",
  right = "auto"
}: IProps) {
  const modifier = ` dot--${type}`
  const customStyles = {left, top, bottom, right}
  return <div style={customStyles} className={`dot${modifier}`} />
}
