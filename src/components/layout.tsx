import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {Helmet} from "react-helmet"
import { SiteMetaData } from "../types/metadata"
import Nav from "./nav"

interface Props {
  pageTitle: string
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  const data: SiteMetaData = useStaticQuery(graphql`
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
      <main>{children}</main>
    </>
  )
}

export default Layout
