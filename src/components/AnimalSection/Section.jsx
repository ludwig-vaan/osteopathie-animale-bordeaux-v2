import React from 'react';
import ResponsiveImage from '../ResponsiveImage';

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
        <div className="-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <ResponsiveImage
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:max-w-none object-cover"
            image={image}
            alt={alt}
            widths={[320, 480, 640, 768, 1024, 1280]}
            sizes="(max-width: 1024px) 100vw, 540px"
            fit="cover"
          />
        </div>
      </div>
    </>
  );
}
