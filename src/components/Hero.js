import React from "react"
import Header from "./header"

export default function Hero() {
  return (
    <div class="bg-happy-dog bg-no-repeat bg-cover bg-center h-screen w-full">
      <div
        class="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <Header />
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2"></div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0"></div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span
                  class="block text-white"
                  style={{ textShadow: "#143545  1px 0 10px" }}
                >
                  Agathe Lescout
                </span>
                <span
                  class="block text-gold-500"
                  style={{ textShadow: "#143545 1px 0 10px" }}
                >
                  ostéopathe animalier
                </span>
              </h1>
              <p
                class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl"
                style={{ textShadow: "#143545 1px 0 10px" }}
              >
                consultation à domicile et en cabinet
              </p>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#"
                    class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gold-600 bg-white hover:bg-blue-50 sm:px-8"
                  >
                    Prendre rendez-vous en cabinet
                  </a>
                  <a
                    href="#"
                    class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gold-500 hover:bg-opacity-70 sm:px-8"
                  >
                    Contactez-moi
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
