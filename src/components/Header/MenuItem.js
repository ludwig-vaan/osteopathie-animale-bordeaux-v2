import { useFocus } from "@react-aria/interactions"
import { useMenuItem } from "@react-aria/menu"
import { mergeProps } from "@react-aria/utils"
import React from "react"
import * as Icons from "../icons"

const navigationSvg = {
  animaux: <Icons.Animal />,
  "quand-consulter": <Icons.QuandConsulter />,
  tarifs: <Icons.Tarifs />,
  osteopathie: <Icons.Osteopathie />,
}

export default function MenuItem({ item, state, onClose }) {
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
      href={`#${item.key}`}
      className={`-m-3 p-3 flex flex-row items-center rounded-lg hover:bg-gold-300 text-gold-600 hover:text-white ${
        isFocused ? "bg-gold-100" : ""
      }`}
    >
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gold-400 to-gold-500 text-white">
        {navigationSvg[item.key]}
      </div>
      <div className="ml-4 text-base font-medium ">{item.rendered}</div>
    </a>
  )
}
