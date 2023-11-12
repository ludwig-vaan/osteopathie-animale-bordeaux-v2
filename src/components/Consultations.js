import React from 'react';

export default function Consultations() {
  return (
    <div className="bg-gray-100 relative pt-16 overflow-hidden  ">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 "></div>
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gold-600 sm:text-4xl">
            Consultations en Cabinet à Bègles <br />
            et Saint-Aubin-de-Médoc
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Nous sommes ravis de vous accueillir dans nos cabinets situés à
            Bègles et à Saint-Aubin-de-Médoc. Profitez d'un environnement
            professionnel et adapté pour les soins de vos animaux.
          </p>
        </div>
      </div>
    </div>
  );
}
