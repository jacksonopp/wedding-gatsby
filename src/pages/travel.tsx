import { graphql, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import ColorRow from "../components/colorRow"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import { BackgroundColor } from "../types/color.enum"
import { IAllTravelItems } from "../types/travelItem.type"

interface Props extends PageProps {
  data: IAllTravelItems
}

const TravelPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle="Travel">
      <PageDescription color={BackgroundColor.Green} pageTitle="Travel">
        <p>{data.contentfulPageHeaderSection.headerContent.headerContent}</p>
      </PageDescription>
      {data.allContentfulTravelInfo.nodes.map((row, i) => (
        // TODO: Make an alternating row type component
        <ColorRow
          key={row.id}
          even={i % 2 === 0}
          oddColor={BackgroundColor.Red}
          evenColor={BackgroundColor.Blue}
        >
          <h2 className="text-3xl">{row.title}</h2>
          <p>{row.subtitle}</p>
          <br />
          <p>{row.description.description}</p>
          <p>{row.address1}</p>
          <p>{row.address2}</p>
          <a
            className="border border-gray-700 py-2 px-5 hover:bg-gray-300 hover:bg-opacity-50"
            href={row.url}
            target="_blank"
          >
            Visit Site
          </a>
        </ColorRow>
      ))}
    </Layout>
  )
}

// TODO: Change slug
export const data = graphql`
  query {
    contentfulPageHeaderSection(slug: { eq: "lorem" }) {
      headerContent {
        headerContent
      }
    }
    allContentfulTravelInfo {
      nodes {
        address1
        address2
        id
        title
        description {
          description
        }
        phone
        url
        subtitle
      }
    }
  }
`

export default TravelPage
