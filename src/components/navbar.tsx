import { Link } from 'gatsby';
import React from 'react'
import {navBar} from './nav.module.css';

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
        className="nav-link"
        activeClassName="nav-link-active"
        to="/"
      >
        home
      </Link>
      <Link
        onClick={closeNav}
        className="nav-link"
        activeClassName="nav-link-active"
        to="/schedule"
      >
        schedule
      </Link>
      <a className="nav-link" href="#">
        rsvp
      </a>
      <Link
        onClick={closeNav}
        className="nav-link"
        activeClassName="nav-link-active"
        to="/travel"
      >
        travel
      </Link>
      <Link
        onClick={closeNav}
        className="nav-link"
        activeClassName="nav-link-active"
        to="/things-to-do"
      >
        things to do
      </Link>
      <a className="nav-link" href="/registry">
        registry
      </a>
      <Link
        onClick={closeNav}
        className="nav-link"
        activeClassName="nav-link-active"
        to="/faq"
      >
        faq
      </Link>
    </nav>
  )
}

export default Navbar
