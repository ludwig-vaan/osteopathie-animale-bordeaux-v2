import React from "react"

const prices = [
  {
    title: "Chien et Chat",
    description: "Consultation 50 min à 1h",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2896&q=80",
    price: "60",
  },
  {
    title: "Cheval",
    description: "Consultation d'environ 1h",
    image:
      "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
    price: "90",
  },
  {
    title: "Vache",
    description: "Consultation d'environ 1h",
    image:
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1621&q=80",
    price: "90",
  },
  {
    title: "N.A.C",
    description: "Consultation d'environ 30 à 40 min",
    image:
      "https://images.unsplash.com/photo-1551148408-9b3cc5e1add6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2704&q=80",
    price: "45",
  },
]

export default function Prices() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gold-500 sm:text-center">
            Tarifs
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Consultation à domicile et en cabinet. Frais de déplacements au delà
            de 20km autour de Bordeaux
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {prices.map(({ title, description, price, image }) => (
            <Card
              title={title}
              description={description}
              price={price}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({ title, description, price, image }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt="" />
      </div>
      <div className="p-6">
        <h2 className="text-lg leading-6 font-medium text-gold-600">{title}</h2>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <p className="mt-8 text-right">
          <span className="text-4xl font-extrabold text-gold-500">{price}</span>
          <span className="text-base font-medium text-gold-700">€</span>
        </p>
      </div>
    </div>
  )
}
