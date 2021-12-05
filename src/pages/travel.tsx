import { graphql, PageProps } from "gatsby"
import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import { BackgroundColor } from "../types/color"
import { AllTravelItems } from "../types/travelItem"

interface Props extends PageProps {
  data: AllTravelItems
}

const TravelPage: React.FC<Props> = ({data}) => {
  return (
    <Layout pageTitle="Travel">
      <PageDescription color={BackgroundColor.Green} pageTitle="Travel">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure
          incidunt blanditiis labore sed quasi est sint magni voluptatem dolor
          eos, autem deleniti animi, ducimus laboriosam, illo voluptates
          perspiciatis eligendi.
        </p>
      </PageDescription>
      {data.allContentfulTravelInfo.nodes.map((row) => (
        // TODO: Make an alternating row type component
        <DuoToneRow
          key={row.id}
          leftColor={BackgroundColor.Red}
          leftChildren={
            <div className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl">{row.title}</h1>
              <p>{row.address1}</p>
              <p>{row.address2}</p>
              <p>{row.description.description}</p>
            </div>
          }
          rightColor={BackgroundColor.Yellow}
          rightChildren={<p>right content</p>}
        />
      ))}
    </Layout>
  )
}

export const data = graphql`
  query {
    allContentfulTravelInfo {
      nodes {
        address1
        address2
        id
        title
        description {
          description
        }
      }
    }
  }
`

export default TravelPage
