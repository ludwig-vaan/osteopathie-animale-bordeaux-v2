import React from "react"
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline"

export const Banner = () => {
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  return (
    <div className="fixed top-0 inset-x-0 pt-2 md:pt-12 sm:pt-16 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-gold-600 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-gold-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white ">
                <span className="md:hidden">
                  Absence du 20 juin au 11 juillet, durant cette periode, prise
                  de rendez-vous uniquement en cabinet avec la remplaçante Lora
                  Cloutet
                </span>
                <span className="hidden md:inline">
                  Absence du 20 juin au 11 juillet, durant cette periode, prise
                  de rendez-vous uniquement en cabinet avec la remplaçante Lora
                  Cloutet
                </span>
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setVisible(visible => !visible)}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
