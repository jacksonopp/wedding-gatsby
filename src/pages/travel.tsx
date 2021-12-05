import { graphql, PageProps } from "gatsby"
import React from "react"
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure
          incidunt blanditiis labore sed quasi est sint magni voluptatem dolor
          eos, autem deleniti animi, ducimus laboriosam, illo voluptates
          perspiciatis eligendi.
        </p>
      </PageDescription>
      {data.allContentfulTravelInfo.nodes.map(row => (
        // TODO: Make an alternating row type component
        <DuoToneRow
          key={row.id}
          leftColor={BackgroundColor.Red}
          leftChildren={
            <div className="flex flex-col items-center">
              <h1 className="text-2xl sm:text-4xl mb-2">{row.title}</h1>
              <p className="text-lg sm:text-2xl mb-1">{row.subtitle ? row.subtitle : null}</p>
              <p>{row.address1}</p>
              <p>{row.address2}</p>
              <p>{row.description.description}</p>
              <a
                target="_blank"
                className="
                  border border-gray-700 py-2 px-5 
                  hover:bg-gray-300 hover:bg-opacity-50 mt-2"
                href={row.url}
              >
                Visit site
              </a>
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
  query MyQuery {
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
