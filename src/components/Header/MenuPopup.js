import React from "react"
import { useMenu } from "@react-aria/menu"
import { DismissButton, useOverlay } from "@react-aria/overlays"
import { useTreeState } from "@react-stately/tree"
import { FocusScope } from "@react-aria/focus"
import MenuItem from "./MenuItem"
import { mergeProps } from "@react-aria/utils"

export default function MenuPopup(props) {
  // Create menu state based on the incoming props
  let state = useTreeState({ ...props, selectionMode: "none" })

  // Get props htmlFor the menu element
  let ref = React.useRef()
  let { menuProps } = useMenu(props, state, ref)

  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  let overlayRef = React.useRef()
  let { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the menu is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <div className="absolute z-30 top-0 inset-x-0 p-2 origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <FocusScope restoreFocus>
            <div {...overlayProps} ref={overlayRef}>
              <DismissButton onDismiss={props.onClose} />
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={props.onClose}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gold-500 hover:text-gold-500 hover:bg-gold-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
                  >
                    <span className="sr-only">Close menu</span>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav
                  className="grid grid-cols-1 gap-7"
                  {...mergeProps(menuProps, props.domProps)}
                  ref={ref}
                >
                  {[...state.collection].map(item => (
                    <MenuItem
                      key={item.key}
                      item={item}
                      state={state}
                      onClose={props.onClose}
                    />
                  ))}
                </nav>
              </div>
              <DismissButton onDismiss={props.onClose} />
            </div>
          </FocusScope>
        </div>
      </div>
    </div>
  )
}
