import React from "react"
import PropTypes from "prop-types"
import { Item } from "@react-stately/collections"
import MenuButton from "./MenuButton"
function Header() {
  return (
    <header>
      <div className="relative">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* 
            ADD AGATHE LOGO HERE
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                alt=""
              />
            </a> 
            */}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <MenuButton label="Actions">
              <Item key="animaux">Animaux</Item>
              <Item key="quand-consulter">Quand consulter ?</Item>
              <Item key="tarifs">Tarifs</Item>
              <Item key="osteopathie">Ostéopathie</Item>
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

export default Header
