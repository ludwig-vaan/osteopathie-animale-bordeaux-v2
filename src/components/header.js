import PropTypes from "prop-types"
import React, { useState } from "react"
import { Transition } from "@headlessui/react"

function Header({ siteTitle }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <div class="relative">
        <div class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            {/* <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                alt=""
              />
            </a> */}
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gold-400 hover:text-gold-500 hover:bg-gold-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex lg:flex space-x-10">
            <a
              href="#"
              class="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Animaux
            </a>
            <a
              href="#"
              class="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Quand consulter ?
            </a>
            <a
              href="#"
              class="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Tarifs
            </a>
            <a
              href="#"
              class="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Osteopathie
            </a>
          </nav>
          <div class="hidden md:flex  lg:flex items-center justify-end md:flex-1 lg:flex-1">
            <a
              href="#"
              class="whitespace-nowrap border-gold-500 border px-4 py-2 rounded-md text-base  text-gold-500 font-medium hover:text-white hover:bg-gold-500 hover:border-gold-500"
            >
              Contact
            </a>
            <a
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gold-500 hover:bg-opacity-70"
            >
              Rendez-vous
            </a>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute z-30 top-0 inset-x-0 p-2 origin-top-right md:hidden"
        >
          <div class="absolute z-30 top-0 inset-x-0 p-2 origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    {/* <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt="Workflow"
                    /> */}
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gold-500 hover:text-gold-500 hover:bg-gold-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid grid-cols-1 gap-7">
                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gold-400 to-gold-500  text-white">
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        Animaux
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gold-400 to-gold-500 text-white">
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        Quand consulter ?
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gold-400 to-gold-500 text-white">
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        Tarifs
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gold-400 to-gold-500 text-white">
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        Osteopathie
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5">
                <div class="mt-6">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gold-500 hover:gold-700 "
                  >
                    Prendre rendez-vous en cabinet
                  </a>
                  <p class="mt-6 text-center text-base font-medium text-gray-900">
                    Contactez-moi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
