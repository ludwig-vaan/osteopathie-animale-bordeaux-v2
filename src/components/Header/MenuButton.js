import React from "react"
import { Transition } from "@headlessui/react"
import { useMenuTriggerState } from "@react-stately/menu"
import { useButton } from "@react-aria/button"
import { useMenuTrigger } from "@react-aria/menu"
import MenuPopup from "./MenuPopup"

export default function MenuButton(props) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props)

  // Get props htmlFor the menu trigger and menu elements
  let ref = React.useRef()
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)

  // Get props htmlFor the button based on the trigger props from useMenuTrigger
  let { buttonProps } = useButton(menuTriggerProps, ref)

  return (
    <div>
      <button
        {...buttonProps}
        ref={ref}
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gold-400 hover:text-gold-500 hover:bg-gold-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
      >
        <span className="sr-only">Open menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition
        show={state.isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="absolute z-30 top-0 inset-x-0 p-2 origin-top-right md:hidden"
      >
        <MenuPopup
          {...props}
          domProps={menuProps}
          // autoFocus={state.focusStrategy} // The autoFocus prop should not be used, as it can reduce usability and accessibility htmlFor users
          onClose={() => state.close()}
        />
      </Transition>
    </div>
  )
}
