import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { ISiteMetaData } from "../types/metadata.type"
import Nav from "./nav"

interface Props {
  pageTitle: string
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  const data: ISiteMetaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
      <Nav />
      {pageTitle !== "Home" && (
        <header>
          <h1 className="text-4xl md:hidden text-center py-4">{pageTitle}</h1>
        </header>
      )}
      <>{children}</>
      <footer className="text-center border-t border-black py-3">
        &copy; Jackson Oppenheim 2021 | Made with and Gatsby and ❤️
      </footer>
    </>
  )
}

export default Layout
