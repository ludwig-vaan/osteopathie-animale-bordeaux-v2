import { Transition } from "@headlessui/react"
import React, { useState } from "react"

// <!--
//   Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
//   to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
//   in the near future, but in the mean time we recommend these reference guides when building your implementation:

//   https://www.w3.org/TR/wai-aria-practices/#Listbox
//   https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
// -->

const option = {
  chien: "Le chien",
  chat: "Le chat",
  cheval: "Le cheval",
  vache: "La vache",
  nac: "Les N.A.C.",
}

export default function SelectMenu({ animal, setAnimal }) {
  const [show, setShow] = useState(false)
  return (
    <div className="sm:hidden">
      <label
        id="listbox-label"
        class="block text-sm font-medium text-gold-700 pt-4"
      >
        Choisir un animal
      </label>
      <div class="mt-1 relative">
        <button
          onClick={() => setShow(!show)}
          type="button"
          class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span class="block truncate">{option[animal]}</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* <!-- Heroicon name: solid/selector --> */}
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <Transition
          show={show}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {Object.entries(option).map(tuple => (
              <Item
                name={tuple}
                animal={animal}
                setAnimal={setAnimal}
                setShow={setShow}
                show={show}
              />
            ))}
          </ul>
        </Transition>
      </div>
    </div>
  )
}

function Item({ name, animal, setAnimal, setShow, show }) {
  const selected = name[0] === animal
  return (
    <li
      class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gold-100"
      id="listbox-option-0"
      role="option"
      onClick={() => {
        setAnimal(name[0])
        setShow(!show)
      }}
    >
      <span
        class={`${selected ? "font-semibold" : "font-normal"} block truncate`}
      >
        {name[1]}
      </span>
      {selected ? (
        <span class="text-gold-600 absolute inset-y-0 right-0 flex items-center pr-4">
          {/* <!-- Heroicon name: solid/check --> */}
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      ) : null}
    </li>
  )
}
