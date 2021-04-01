import React from "react"

const prices = [
  {
    title: "Chien et Chat",
    description: "Consultation 50 min à 1h",
    price: "60",
  },
  {
    title: "Cheval",
    description: "Consultation d'environ 1h",
    price: "90",
  },
  {
    title: "Vache",
    description: "Consultation d'environ 1h",
    price: "90",
  },
  {
    title: "N.A.C",
    description: "Consultation d'environ 30 à 40 min",
    price: "45",
  },
]

export default function Prices() {
  return (
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:flex-col sm:align-center">
          <h1 class="text-5xl font-extrabold text-gold-500 sm:text-center">
            Tarifs
          </h1>
          <p class="mt-5 text-xl text-gray-500 sm:text-center">
            Consultation à domicile et en cabinet. Frais de déplacements au delà
            de 20km autour de Bordeaux
          </p>
        </div>
        <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {prices.map(({ title, description, price }) => (
            <Card title={title} description={description} price={price} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({ title, description, price }) {
  return (
    <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div class="p-6">
        <h2 class="text-lg leading-6 font-medium text-gold-600">{title}</h2>
        <p class="mt-4 text-sm text-gray-500">{description}</p>
        <p class="mt-8 text-right">
          <span class="text-4xl font-extrabold text-gold-500">{price}</span>
          <span class="text-base font-medium text-gray-500">€</span>
        </p>
      </div>
    </div>
  )
}
