import React, { useState, useRef, useEffect } from "react"
import Section from "./Section"
import { configuration } from "./configutation"
import AriaSelecMenu from "./AriaSelectMenu"

export default function AnimalSection({ id, images }) {
  const [animal, setAnimal] = useState("chien")
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    ref.current && setHeight(ref.current.clientHeight)
  }, [])

  const selectedStyle = "border-gold-500 border-b-2 text-gold-600"
  const unselectedStyle =
    "border-white border-b-2  text-white hover:text-gold-700 hover:border-gold-500"
  const currentAnimal = configuration[animal]
  const image = images[currentAnimal.key]
  return (
    <div
      id={id}
      className="bg-gradient-to-r to-canard from-canard-light overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          L'ostéopathie pour qui ?
        </h2>
        <div>
          <AriaSelecMenu initialAnimal="chien" setAnimal={setAnimal} />
          <div className="hidden sm:block">
            <nav className="-mb-px flex" aria-label="Tabs">
              <span
                onClick={() => setAnimal("chien")}
                className={`${
                  animal === "chien" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "chien" ? "page" : undefined}
              >
                Le chien
              </span>

              <span
                onClick={() => setAnimal("chat")}
                className={`${
                  animal === "chat" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "chat" ? "page" : undefined}
              >
                Le chat
              </span>

              <span
                onClick={() => setAnimal("cheval")}
                className={`${
                  animal === "cheval" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "cheval" ? "page" : undefined}
              >
                Le cheval
              </span>

              <span
                onClick={() => setAnimal("vache")}
                className={`${
                  animal === "vache" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "vache" ? "page" : undefined}
              >
                La vache
              </span>
              <span
                onClick={() => setAnimal("nac")}
                className={`${
                  animal === "nac" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "nac" ? "page" : undefined}
              >
                N.A.C.
              </span>
            </nav>
          </div>
        </div>
        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 `}
          style={{ minHeight: height !== 0 ? height : undefined }}
        >
          <Section {...configuration[animal]} image={image} />
        </div>
      </div>
    </div>
  )
}
