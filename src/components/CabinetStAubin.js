import React from 'react';

import { useHasMounted } from '../hooks/useHasMounted';
import MapBox from './MapBox';
import { Map } from './icons';

export default function CabinetStAubin() {
  const hasMounted = useHasMounted();

  const LNG = -0.730343;
  const LAT = 44.923095;
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      ></div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gold-500">
                  <Map />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gold-500">
                  Saint-Aubin-de-Médoc
                </h2>
                <p className="mt-4 text-lg text-gray-500">16 Allée Margaux</p>
                <p className="mt-2 text-lg text-gray-500">
                  Parking gratuit disponible sur place.
                </p>
                <p className="mt-2 text-lg text-gray-500">
                  Accès facile en voiture depuis la déviation du Taillan-médoc
                </p>
                <button
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                      const { latitude, longitude } = position.coords;
                      const googleMapsUrl = `https://www.google.fr/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(
                        '16 allée margaux, 33160 saint-aubin-de-médoc'
                      )}&travelmode=driving`;
                      window.open(googleMapsUrl, '_blank');
                    });
                  }}
                  className="inline-flex mt-4 justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                >
                  Obtenir l'itinéraire
                </button>
              </div>
            </div>
          </div>
          <div
            className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1"
            style={{ height: '400px' }}
          >
            <div className="lg:relative h-full sm:p-4">
              <div className="h-full sm:rounded-xl sm:shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                {hasMounted && (
                  <MapBox lng={LNG} lat={LAT} label="Cabinet de Saint-Aubin" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
