import React from 'react';
import { Item } from '@react-stately/collections';
import { mergeProps } from '@react-aria/utils';
import { useFocus } from '@react-aria/interactions';
import { useTreeState } from '@react-stately/tree';
import { useMenu, useMenuItem } from '@react-aria/menu';

function Menu(props) {
  // Create state based on the incoming props
  let state = useTreeState({ ...props, selectionMode: 'none' });

  // Get props for the menu element
  let ref = React.useRef();
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} className="-mb-px flex flex-row">
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          onAction={props.onAction}
        />
      ))}
    </ul>
  );
}

function MenuItem({ item, state, onAction }) {
  // Get props for the menu item element
  let ref = React.useRef();
  let isDisabled = state.disabledKeys.has(item.key);

  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled,
      onAction,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  let [isFocused, setFocused] = React.useState(false);
  let { focusProps } = useFocus({ onFocusChange: setFocused });

  const selectedStyle = 'border-gold-500 border-b-2 text-gold-600';
  const unselectedStyle =
    'border-white border-b-2  text-white hover:text-gold-700 hover:border-gold-500';

  return (
    <li
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      className={`${
        isFocused ? selectedStyle : unselectedStyle
      } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-base cursor-pointer`}
    >
      {item.rendered}
    </li>
  );
}
export default function AriaSelecMenuWeb({ setAnimal }) {
  return (
    <div className="hidden sm:block ">
      <Menu onAction={setAnimal} aria-label="Tabs">
        <Item key="chien">Le chien</Item>
        <Item key="chat">Le chat</Item>
        <Item key="cheval">Le cheval</Item>
        <Item key="vache">La vache</Item>
        <Item key="nac">N.A.C.</Item>
      </Menu>
    </div>
  );
}
