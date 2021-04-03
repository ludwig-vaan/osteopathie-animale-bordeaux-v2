import React from "react"

export default function Section({ icon, name, text, image, alt = "" }) {
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
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src={image}
            alt={alt}
          />
        </div>
      </div>
    </>
  )
}
