import { Link } from "gatsby"
import React, { useState } from "react"
import {navBar} from './nav.module.css';
import Navbar from "./navbar";

interface Props {}

const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false)

  function closeNav(): void {
    setNavOpen(false)
  }

  return (
    <header className="flex flex-col justify-center items-center top-0 z-10 bg-white static">
      <button className="absolute left-2 top-4 md:hidden" onClick={() => setNavOpen(true)}>
        menu
      </button>
      <p className="text-4xl mb-3 pt-2">Jackson & Johanna</p>
      <div className="hidden md:block"><Navbar /></div>
      {navOpen && <Navbar closeNav={closeNav} />}
    </header>
  )
}

export default Nav
