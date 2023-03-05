import React from "react"
import { graphql } from "gatsby"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import "../components/layout.css"

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
import Seo from "../components/seo"
import CarteCabinet from "../components/CarteCabinet"

const IndexPage = props => {
  const images = props.data.allFile.edges
  const imagesTree = images?.reduce((previousValue, currentValue) => {
    const newValue = {
      ...previousValue,
      [currentValue.node.name]:
        currentValue.node.childImageSharp.gatsbyImageData,
    }
    return newValue
  }, {})

  return (
    <div>
      <main>
        <Seo />
        <Hero />
        <AnimalSection id="animaux" images={imagesTree} />
        <NouvelleAquitaine />
        <CarteCabinet />
        <QuandConsulter id="quand-consulter" />
        <Prices id="tarifs" images={imagesTree} />
        <DeroulementConsultation />
        <OsteopathieAnimale id="osteopathie" />
        <QuiSuisJe />
        <GoogleReCaptchaProvider reCaptchaKey="6LfWZ7YfAAAAAPD7Q4zlI2TZU_mYatG48lJ97JzM">
          <Contact id="contact" />
        </GoogleReCaptchaProvider>
      </main>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query Image {
    allFile(filter: { extension: { regex: "/(jpeg)/" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default IndexPage
