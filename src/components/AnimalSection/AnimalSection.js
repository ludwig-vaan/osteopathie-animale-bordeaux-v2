import React, { useState, useRef, useEffect } from "react"
import Section from "./Section"
import SelectMenu from "./SelectMenu"
import { configuration } from "./configutation"

export default function AnimalSection() {
  const [animal, setAnimal] = useState("chien")
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    ref.current && setHeight(ref.current.clientHeight)
  }, [])

  const selectedStyle = "border-gold-500 border-b-2 text-gold-600"
  const unselectedStyle =
    "border-white border-b-2  text-white hover:text-gold-700 hover:border-gold-500"

  return (
    <div classNameName="bg-gradient-to-r to-canard from-canard-light">
      <div classNameName="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 classNameName="text-3xl font-extrabold text-white tracking-tight">
          L'ostéopathie pour qui ?
        </h2>
        <div>
          <SelectMenu animal={animal} setAnimal={setAnimal} />
          <div classNameName="hidden sm:block">
            <nav classNameName="-mb-px flex" aria-label="Tabs">
              <span
                onClick={() => setAnimal("chien")}
                classNameName={`${
                  animal === "chien" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "chien" ? "page" : undefined}
              >
                Le chien
              </span>

              <span
                onClick={() => setAnimal("chat")}
                classNameName={`${
                  animal === "chat" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "chat" ? "page" : undefined}
              >
                Le chat
              </span>

              <span
                onClick={() => setAnimal("cheval")}
                classNameName={`${
                  animal === "cheval" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "cheval" ? "page" : undefined}
              >
                Le cheval
              </span>

              <span
                onClick={() => setAnimal("vache")}
                classNameName={`${
                  animal === "vache" ? selectedStyle : unselectedStyle
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
                aria-current={animal === "vache" ? "page" : undefined}
              >
                La vache
              </span>
              <span
                onClick={() => setAnimal("nac")}
                classNameName={`${
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
          classNameName={`mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 `}
          style={{ minHeight: height !== 0 ? height : undefined }}
        >
          <Section {...configuration[animal]} />
        </div>
      </div>
    </div>
  )
}
