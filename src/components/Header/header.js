import PropTypes from "prop-types"
import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { useMenuTriggerState } from "@react-stately/menu"
import { useButton } from "@react-aria/button"
import { useMenu, useMenuItem, useMenuTrigger } from "@react-aria/menu"
import { useTreeState } from "@react-stately/tree"
import { DismissButton, useOverlay } from "@react-aria/overlays"
import { FocusScope } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import { Item } from "@react-stately/collections"
import { useFocus } from "@react-aria/interactions"

function Header() {
  return (
    <header>
      <div className="relative">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                alt=""
              />
            </a> */}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <MenuButton label="Actions">
              <Item key="#animaux">Animaux</Item>
              <Item key="#quand-consulter">Quand consulter ?</Item>
              <Item key="#tarifs">Tarifs</Item>
              <Item key="#osteopathie">Ostéopathie</Item>
            </MenuButton>
          </div>
          <nav className="hidden md:flex lg:flex space-x-10">
            <a
              href="#animaux"
              className="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Animaux
            </a>
            <a
              href="#quand-consulter"
              className="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Quand consulter ?
            </a>
            <a
              href="#tarifs"
              className="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Tarifs
            </a>
            <a
              href="#osteopathie"
              className="border-transparent border-b px-4 py-2 text-base font-medium text-white hover:text-gold-500 hover:border-b-2 hover:border-gold-500"
            >
              Ostéopathie
            </a>
          </nav>
        </div>
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

function MenuButton(props) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props)

  // Get props for the menu trigger and menu elements
  let ref = React.useRef()
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)

  // Get props for the button based on the trigger props from useMenuTrigger
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
          autoFocus={state.focusStrategy}
          onClose={() => state.close()}
        />
      </Transition>
    </div>
  )
}

function MenuPopup(props) {
  // Create menu state based on the incoming props
  let state = useTreeState({ ...props, selectionMode: "none" })

  // Get props for the menu element
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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

function MenuItem({ item, state, onClose }) {
  // Get props for the menu item element
  let ref = React.useRef()
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
      onClose,
    },
    state,
    ref
  )

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  let [isFocused, setFocused] = React.useState(false)
  let { focusProps } = useFocus({ onFocusChange: setFocused })

  return (
    <a
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      href={item.key}
      className={`-m-3 p-3 flex flex-row items-center rounded-lg hover:bg-gold-300 ${
        isFocused ? "bg-gold-100" : ""
      }`}
    >
      <NavItem name={item.rendered} />
    </a>
  )
}

function NavItem({ name }) {
  return (
    <>
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gold-400 to-gold-500 text-white">
        <svg
          className="h-6 w-6"
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
      <div className="ml-4 text-base font-medium text-gray-900">{name}</div>
    </>
  )
}

export default Header
