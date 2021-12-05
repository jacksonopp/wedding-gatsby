import { graphql, PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          laboriosam non eveniet! Quas vel quod autem unde ipsum, fuga debitis
          placeat inventore modi, vitae est repellat delectus ratione quisquam
          dolores.
        </p>
      </PageDescription>
      {data.allContentfulThingToDo.nodes.map((row) => {
        let image = getImage(row.image)
        return (
          <DuoToneRow
            key={row.id}
            leftColor={BackgroundColor.Green}
            leftChildren={<ThingToDo image={image} link={row.url} title={row.title} />}
            rightColor={BackgroundColor.Purple}
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
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
