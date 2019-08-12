import React from "react"

interface IProps {
  text: string[]
}

export default function StringsToSpans({text = []}: IProps) {
  const spans = text.map(item => <span key={item}>{item}</span>)
  return <React.Fragment>{spans}</React.Fragment>
}
