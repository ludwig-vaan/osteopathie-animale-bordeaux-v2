import React from "react"

import { Map } from "./icons"
// import Leaflet from "./leafletMap"

export default function CarteCabinet({ id }) {
  return (
    <div id={id} className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gold-500">
                  <Map />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gold-500">
                  Consultation en cabinet
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  5 place du 14 juillet à Bègles.
                </p>
                <p className="mt-2 text-lg text-gray-500">
                  Parking gratuit place du bi-centenaire
                </p>
                <p className="mt-2 text-lg text-gray-500">
                  Accès rocade sortie 20 Cadaujac / Bègles.
                </p>
                <p className="mt-2 text-lg text-gray-500">
                  Accès tram C arrêt Stade Musard.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-12 sm:mt-16 lg:mt-0" style={{ height: "400px" }}>
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative h-full ">
              <div className="h-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                <Leaflet />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
