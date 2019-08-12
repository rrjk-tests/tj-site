import React from "react"

import "./style.scss"

import TopSection from "./TopSection"
import ControlSection from "./ControlSection"
import FluidSection from "./FluidSection"
import SignupSection from "./SignupSection"
import EasyAnimation from "./EasyAnimation"
import Footer from "./Footer"

export default function App() {
  return (
    <div className="app">
      <TopSection />
      <ControlSection />
      <FluidSection />
      <EasyAnimation />
      <SignupSection />
      <Footer />
    </div>
  )
}
