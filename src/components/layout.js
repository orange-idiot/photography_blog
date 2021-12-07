import * as React from "react"
import { Link } from "gatsby"
import Nav from './nav'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
      <Nav />
      <h1 className="main-heading">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <Link to="/">{title}</Link>
      </h1>
      </>
    )
  } else {
    header = (
      <div className="header-wrapper">
        <Nav />
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, {`Built by `}<a href="https://github.com/delawere" rel="noreferrer" target="_blank">Dmitriy Zhiganov</a>{` with `}
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
