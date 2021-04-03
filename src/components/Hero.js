import React from "react"
import { openPopupWidget } from "react-calendly"

import Header from "./Header/header"

export default function Hero() {
  const url_calendly =
    "https://calendly.com/osteopathe-animalier/consultation-osteopathique"
  const onClick = () => openPopupWidget({ url: url_calendly })

  return (
    <div className="bg-happy-dog bg-no-repeat bg-cover bg-center h-screen w-full">
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <Header />
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2"></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0"></div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span
                  className="block text-white"
                  style={{ textShadow: "#143545  1px 0 10px" }}
                >
                  Agathe Lescout
                </span>
                <span
                  className="block text-gold-500"
                  style={{ textShadow: "#143545 1px 0 10px" }}
                >
                  ostéopathe animalier
                </span>
              </h1>
              <p
                className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl"
                style={{ textShadow: "#143545 1px 0 10px" }}
              >
                consultation à domicile et en cabinet
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <button
                    onClick={onClick}
                    className="flex w-full items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gold-600 bg-white hover:bg-opacity-70 sm:px-8"
                  >
                    Prendre rendez-vous en cabinet
                  </button>
                  <a
                    href="#contact"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gold-500 hover:bg-opacity-70 sm:px-8"
                  >
                    Prendre rendez-vous à domicile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
