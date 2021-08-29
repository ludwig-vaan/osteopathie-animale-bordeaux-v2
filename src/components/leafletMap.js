import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { isDomAvailable } from "../lib/utils"

const Leaflet = () => {
  if (!isDomAvailable()) {
    return (
      <div>
        <p>Loading map...</p>
      </div>
    )
  }

  return (
    <MapContainer
      className="w-full h-full rounded-xl"
      center={[44.807147, -0.548706]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[44.807147, -0.548706]}>
        <Popup>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ostéopathie Animale Bordeaux - Agathe LESCOUT
            </h3>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Leaflet
