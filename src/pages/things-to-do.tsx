import { graphql, PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import ColorRow from "../components/colorRow"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import PageHeader from "../components/pageHeader"
import ThingToDo from "../components/thingToDo"
import { BackgroundColor } from "../types/color.enum"
import { IAllthingsToDo } from "../types/thingToDo.type"

interface Props extends PageProps {
  data: IAllthingsToDo
}

const ThingsToDoPage: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="Things to do">
      <PageDescription color={BackgroundColor.Yellow} pageTitle="Things to do">
        <PageHeader>{data.contentfulPageHeaderSection.headerContent.headerContent}</PageHeader>
      </PageDescription>
      {data.allContentfulThingToDo.nodes.map((row, i) => {
        let image = getImage(row.image)
        return (
          <ColorRow
            even={i % 2 === 0}
            key={row.id}
            oddColor={BackgroundColor.Purple}
            evenColor={BackgroundColor.Green}
          >
            <ThingToDo 
              link={row.url} 
              title={row.title}
              image={image}
            />
          </ColorRow>
        )
      })}
    </Layout>
  )
}

// TODO: Change slug
export const query = graphql`
  query {
    contentfulPageHeaderSection(slug: { eq: "lorem" }) {
      headerContent {
        headerContent
      }
    }
    allContentfulThingToDo {
      nodes {
        url
        title
        id
        image {
          gatsbyImageData(aspectRatio: 1, width: 125)
        }
      }
    }
  }
`

export default ThingsToDoPage
