import React from "react"
import "./style.scss"
import TopSection from "./TopSection"
import KeyframesSection from "./KeyframesSection"
import MicroInteractionsSection from "./MicroInteractionsSection"
import SignupSection from "./SignupSection"
import AnimateAnythingSection from "./AnimateAnythingSection"
import Footer from "./Footer"

export default function App() {
  return (
    <div className="app">
      <TopSection />
      <KeyframesSection />
      <MicroInteractionsSection />
      <AnimateAnythingSection />
      <SignupSection />
      <Footer />
    </div>
  )
}
