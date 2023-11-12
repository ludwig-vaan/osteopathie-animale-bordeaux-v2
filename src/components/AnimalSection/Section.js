import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Section({ name, text, image, alt = '' }) {
  return (
    <>
      <div className="mt-6">
        <h3 className="text-2xl font-extrabold tracking-tight text-gold-600">
          {name}
        </h3>
        <p className="mt-2 text-base text-white">{text}</p>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className=" -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <GatsbyImage
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full  lg:max-w-none"
            image={image}
            alt={alt}
            imgStyle={{ borderRadius: 12 }}
            style={{ borderRadius: 12 }}
          />
        </div>
      </div>
    </>
  );
}
