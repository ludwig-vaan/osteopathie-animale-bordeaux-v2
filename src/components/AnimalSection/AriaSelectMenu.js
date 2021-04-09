import React from "react"
import { FocusScope } from "@react-aria/focus"
import { HiddenSelect } from "@react-aria/select"
import { Item } from "@react-stately/collections"
import { mergeProps } from "@react-aria/utils"
import { Transition } from "@headlessui/react"
import { useButton } from "@react-aria/button"
import { useFocus } from "@react-aria/interactions"
import { useListBox, useOption } from "@react-aria/listbox"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import { useSelect } from "@react-aria/select"
import { useSelectState } from "@react-stately/select"

export function Select(props) {
  // Create state based on the incoming props
  let state = useSelectState(props)

  // Get props htmlFor child elements from useSelect
  let ref = React.useRef()
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  )

  // Get props htmlFor the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref)
  return (
    <div className="sm:hidden">
      <div
        {...labelProps}
        className="block text-sm font-medium text-gold-700 pt-4"
      >
        {props.label}
      </div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <div className="mt-1 relative">
        <button
          {...buttonProps}
          ref={ref}
          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <span {...valueProps} className="block truncate">
            {state.selectedItem
              ? state.selectedItem.rendered
              : "Choisir un animal"}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <Transition
          show={state.isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <div>
            <ListBoxPopup {...menuProps} state={state} />
          </div>
        </Transition>
      </div>
    </div>
  )
}

function ListBoxPopup({ state, ...otherProps }) {
  let ref = React.useRef()

  // Get props htmlFor the listbox
  let { listBoxProps } = useListBox(
    {
      autoFocus: state.focusStrategy || true,
      disallowEmptySelection: true,
      ...otherProps,
    },
    state,
    ref
  )

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  let overlayRef = React.useRef()
  let { overlayProps } = useOverlay(
    {
      onClose: () => state.close(),
      shouldCloseOnBlur: true,
      isOpen: state.isOpen,
      isDismissable: true,
    },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the popup is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <DismissButton onDismiss={() => state.close()} />
        <ul {...mergeProps(listBoxProps, otherProps)} ref={ref}>
          {[...state.collection].map(item => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </ul>
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </FocusScope>
  )
}

function Option({ item, state }) {
  // Get props htmlFor the option element
  let ref = React.useRef()
  let isDisabled = state.disabledKeys.has(item.key)
  let isSelected = state.selectionManager.isSelected(item.key)
  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
    },
    state,
    ref
  )

  // Handle focus events so we can apply highlighted
  // style to the focused option
  let [isFocused, setFocused] = React.useState(false)
  let { focusProps } = useFocus({ onFocusChange: setFocused })
  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      className={`cursor-default select-none relative py-2 pl-3 pr-9 ${
        isSelected ? "bg-gold-500" : isFocused ? "bg-gold-100" : ""
      }
      ${isSelected ? "text-white" : "text-gray-900 "}
      `}
    >
      {/* {item.rendered} */}
      <ItemCustom selected={isSelected} name={item.rendered} />
    </li>
  )
}

function ItemCustom({ selected, name }) {
  return (
    <>
      <span
        className={`${
          selected ? "font-semibold" : "font-normal"
        } block truncate`}
      >
        {name}
      </span>
      {selected ? (
        <span className="text-white absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : null}
    </>
  )
}

export default function AriaSelecMenu({ initialAnimal, setAnimal }) {
  const option = {
    chien: "Le chien",
    chat: "Le chat",
    cheval: "Le cheval",
    vache: "La vache",
    nac: "Les nouveaux animaux de compagnie",
  }
  return (
    <Select
      label="Choisir un animal"
      defaultSelectedKey={initialAnimal}
      onSelectionChange={key => setAnimal(key)}
    >
      {Object.entries(option).map(tuple => (
        <Item key={tuple[0]}>{tuple[1]}</Item>
      ))}
    </Select>
  )
}
