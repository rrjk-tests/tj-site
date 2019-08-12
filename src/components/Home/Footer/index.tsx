import React from "react"

import "./style.scss"

import FooterColumn from "./FooterColumn"

import {footerSections} from "../../../locale/en"

export default function Footer() {
  const footerColumns = footerSections.map(item => (
    <FooterColumn
      key={item.title}
      title={item.title}
      description={item.description}
    />
  ))

  return (
    <footer className="footer">
      <div className="footer__layout">{footerColumns}</div>
    </footer>
  )
}
