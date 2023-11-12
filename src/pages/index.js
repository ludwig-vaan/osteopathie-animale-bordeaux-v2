import { graphql } from "gatsby"
import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import "../components/layout.css"

import AnimalSection from "../components/AnimalSection/AnimalSection"
import CarteCabinet from "../components/CarteCabinet"
import Contact from "../components/Contact"
import DeroulementConsultation from "../components/DeroulementConsultation"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NouvelleAquitaine from "../components/NouvelleAquitaine"
import OsteopathieAnimale from "../components/OsteopathieAnimale"
import Prices from "../components/Prices"
import QuandConsulter from "../components/QuandConsulter"
import QuiSuisJe from "../components/QuiSuisJe"
import Seo from "../components/seo"
import Banner from "../components/Banner/Banner"

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
        <Banner />
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
