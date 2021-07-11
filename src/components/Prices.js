import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const prices = [
  {
    title: "Chien et Chat",
    description: "Consultation d'environ 50 min à 1h",
    imageName: "chienetchat",
    alt: "chien et chat",
    price: "60",
  },
  {
    title: "Cheval",
    description: `Consultation d'environ 1h \n `,
    imageName: "cheval",
    alt: "cheval",
    price: "90",
  },
  {
    title: "Vache",
    description: `Consultation d'environ 1h \n `,
    imageName: "vache",
    alt: "vache",
    price: "90",
  },
  {
    title: "N.A.C",
    description: "Consultation d'environ 30 à 40 min",
    imageName: "furet",
    alt: "furet",
    price: "45",
  },
]

function Prices(props) {
  return (
    <div id={props.id} className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gold-500 sm:text-center">
            Tarifs
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Consultation à domicile. Frais de déplacements au delà de 20km
            autour de Bordeaux.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {prices.map(({ title, description, price, imageName, alt }) => {
            return (
              <Card
                key={title}
                title={title}
                description={description}
                price={price}
                image={props?.images[imageName]}
                alt={alt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Card({ title, description, price, image, alt }) {
  return (
    <div
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      href="#contact"
    >
      <div className="flex-shrink-0">
        <GatsbyImage
          className="h-48 w-full object-cover"
          image={image}
          alt={alt}
          imgStyle={{ borderRadius: 8 }}
          style={{ borderRadius: 8 }}
        />
      </div>
      <div className="p-6  flex-1 flex flex-col">
        <div className="flex-none">
          <h2 className="text-lg leading-6 font-bold text-gold-500">{title}</h2>
        </div>
        <div className="flex-1">
          <p className="mt-4 text-base text-gray-500 ">{description}</p>
        </div>
        <div className="flex-none">
          <p className="mt-8 text-right">
            <span className="text-4xl font-extrabold text-gold-500">
              {price}
            </span>
            <span className="text-base font-medium text-gold-700">€</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Prices
