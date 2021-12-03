import { Link } from 'gatsby';
import React from 'react'
import {navBar, navLink, navLinkActive} from './nav.module.css';

interface Props {
  closeNav?: () => void
}

const Navbar: React.FC<Props> = ({closeNav}) => {
  return (
    <nav className={navBar}>
      <button className="absolute right-4 text-4xl md:hidden" onClick={closeNav}>
        &times;
      </button>
      <Link
        onClick={closeNav}
        className={navLink}
        activeClassName={navLinkActive}
        to="/"
      >
        home
      </Link>
      <Link
        onClick={closeNav}
        className={navLink}
        activeClassName={navLinkActive}
        to="/schedule"
      >
        schedule
      </Link>
      <a className={navLink} href="#">
        rsvp
      </a>
      <Link
        onClick={closeNav}
        className={navLink}
        activeClassName={navLinkActive}
        to="/travel"
      >
        travel
      </Link>
      <Link
        onClick={closeNav}
        className={navLink}
        activeClassName={navLinkActive}
        to="/things-to-do"
      >
        things to do
      </Link>
      <a className={navLink} href="/registry">
        registry
      </a>
      <Link
        onClick={closeNav}
        className={navLink}
        activeClassName={navLinkActive}
        to="/faq"
      >
        faq
      </Link>
    </nav>
  )
}

export default Navbar
