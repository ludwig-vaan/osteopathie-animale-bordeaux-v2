import React from 'react';
import { useHasMounted } from '../hooks/useHasMounted';

import { Map } from './icons';
import MapBox from './MapBox';

const LNG = -0.548706;
const LAT = 44.807147;

export default function CarteCabinet({ id }) {
  const hasMounted = useHasMounted();
  return (
    <div id={id} className="relative bg-white pb-32 overflow-hidden">
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
                  Bègles
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  5 place du 14 juillet
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
                <button
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                      const { latitude, longitude } = position.coords;
                      const googleMapsUrl = `https://www.google.fr/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(
                        'osteopathie animale, 5 Pl. du 14 Juillet, 33130 Bègles'
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
          <div className="mt-12 sm:mt-16 lg:mt-0" style={{ height: '400px' }}>
            <div className="lg:relative h-full sm:p-4">
              <div className="h-full sm:rounded-xl sm:shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                {hasMounted && (
                  <MapBox lng={LNG} lat={LAT} label="Cabinet de Bègles" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
