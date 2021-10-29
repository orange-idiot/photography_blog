import * as React from "react"
import { Link } from "gatsby"

const navItems = [
  {
    title: 'Home',
    link: '/' 
  },
  {
    title: 'Contacts',
    link: '/contacts'
  },
  {
    title: 'Prices',
    link: '/prices'
  }
]

const Nav = () => {
    const path = typeof window !== 'undefined' ? window.location.href : '';
    const url = new URL(path)

    return (
      <nav className="header-nav">
        <ul className="header-nav-list">
          {navItems.map(({ title, link }) => (
            <li key={title} className="header-nav-item">
              <Link className={`${url.pathname === link ? "header-link-disabled" : ""}`} disabled={url.pathname === link} to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default Nav