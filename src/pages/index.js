import React from "react"

import Hero from "../components/Hero"
import AnimalSection from "../components/AnimalSection/AnimalSection"
import NouvelleAquitaine from "../components/NouvelleAquitaine"
import QuandConsulter from "../components/QuandConsulter"
import Prices from "../components/Prices"
import DeroulementConsultation from "../components/DeroulementConsultation"
import OsteopathieAnimale from "../components/OsteopathieAnimale"
import QuiSuisJe from "../components/QuiSuisJe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div>
      <main>
        <Hero />
        <AnimalSection id="animaux" />
        <NouvelleAquitaine />
        <QuandConsulter id="quand-consulter" />
        <Prices id="tarifs" />
        <DeroulementConsultation />
        <OsteopathieAnimale id="osteopathie" />
        <QuiSuisJe />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
