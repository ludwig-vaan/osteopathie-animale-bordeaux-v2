import React, { useEffect, useState, Fragment } from "react"
import { Transition } from "@headlessui/react"
import { GatsbyImage } from "gatsby-plugin-image"

const prestations = [
  {
    id: "chien-chat",
    title: "Chien & Chat",
    imageName: "chienetchat",
    alt: "chien et chat",
    basePrice: "60",
    domicilePrice: "70",
    variants: [
      { description: "adulte", basePrice: "60", domicilePrice: "70" },
      { description: "moins de 6 mois", basePrice: "50", domicilePrice: "60" },
      { description: "moins de 3 mois", basePrice: "40", domicilePrice: "50" },
    ],
  },
  {
    id: "cheval",
    title: "Cheval",
    imageName: "cheval",
    alt: "cheval",
    domicilePrice: "90",
    basePrice: null,
  },
  {
    id: "nac",
    title: "N.A.C",
    imageName: "furet",
    alt: "furet",
    basePrice: "50",
    domicilePrice: "60",
  },
  {
    id: "forfait",
    title: "Forfait",
    imageName: "forfaitmensuel",
    alt: null,
    basePrice: "40",
    domicilePrice: "50",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Prices(props) {
  console.log({ props })
  const [option, setOption] = useState("cabinet")
  const [displayedPrestation, setDisplayedPrestation] = useState(prestations)

  useEffect(() => {
    if (option === "cabinet") {
      setDisplayedPrestation(
        prestations.filter(prestation => prestation.id !== "cheval")
      )
    } else {
      setDisplayedPrestation(prestations)
    }
  }, [option])

  return (
    <div id={props.id} className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gold-500 sm:text-center">
            Tarifs
          </h1>

          <div className="relative self-center mt-6 bg-gold-200 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className={classNames(
                "relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gold-500 focus:z-10 sm:w-auto sm:px-8 shadow-sm border",
                option === "cabinet"
                  ? "bg-white border-gold-300 text-gray-900"
                  : "border-transparent text-gray-700"
              )}
              onClick={() => setOption("cabinet")}
            >
              En cabinet
            </button>
            <button
              type="button"
              className={classNames(
                "relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gold-500 focus:z-10 sm:w-auto sm:px-8 shadow-sm border",
                option === "domicile"
                  ? "bg-white border border-gold-300 text-gray-900"
                  : " border-transparent text-gray-700"
              )}
              onClick={() => setOption("domicile")}
            >
              À domicile
            </button>
          </div>
        </div>
        <div
          className={classNames(
            "mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0",
            option === "cabinet" ? "xl:grid-cols-3" : "xl:grid-cols-4"
          )}
        >
          {displayedPrestation.map(
            ({
              id,
              title,
              description,
              imageName,
              alt,
              basePrice,
              domicilePrice,
              variants,
            }) => {
              return (
                <Card
                  id={id}
                  key={id}
                  title={title}
                  description={description}
                  price={option === "cabinet" ? basePrice : domicilePrice}
                  image={props?.images[imageName]}
                  alt={alt}
                  variants={variants}
                  option={option}
                />
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

function Card({ id, title, price, image, alt, variants, option }) {
  return (
    <div
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      href="#contact"
    >
      <div className="flex-shrink-0">
        {image ? (
          <GatsbyImage
            className="h-48 w-full object-cover overflow-hidden"
            imgClassName=""
            image={image}
            alt={alt}
            imgStyle={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
          />
        ) : (
          <div className="h-48 w-full object-cover bg-pink-200" />
        )}
      </div>
      <div className="p-6  flex-1 flex flex-col">
        <div className="flex-none">
          <h2 className="text-xl leading-6 font-bold text-gold-500">{title}</h2>
        </div>
        <div className="flex flex-1 flex-col  content-end justify-end">
          {id === "forfait" && (
            <div className="mt-4">
              <p className="text-lg leading-6 font-bold text-gray-700">
                Éleveurs{" "}
                <span className="text-base">à partir de 3 animaux</span>
              </p>
              <p className="mt-2 text-lg leading-6 font-bold text-gray-700">
                Visite mensuelle
              </p>
              <p className="mt-2 text-lg leading-6 font-bold text-gray-700">
                Rééducation
              </p>
            </div>
          )}
          {variants ? (
            variants.map(({ description, basePrice, domicilePrice }, index) => (
              <p
                className={classNames(
                  "mt-4 text-right",
                  index === variants.lenght ? "mt-4" : "mt-2"
                )}
              >
                <span className="text-lg font-bold text-gray-700">
                  {description}
                  {"   "}
                </span>
                <span className="text-4xl font-extrabold text-gold-500">
                  {option === "cabinet" ? basePrice : domicilePrice}
                </span>
                <span className="text-base font-medium text-gold-600">€</span>
              </p>
            ))
          ) : (
            <p className="mt-4 text-right ">
              <span className="text-4xl font-extrabold text-gold-500">
                {price}
              </span>
              <span className="text-base font-medium text-gold-600">€</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Prices
