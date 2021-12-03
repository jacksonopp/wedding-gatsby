import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import { BackgroundColor } from "../types/color"

interface Props {}

const TravelPage = (props: Props) => {
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
      {Array.from([, , , , , ,]).map((_, i) => (
        <DuoToneRow
          key={i}
          leftColor={BackgroundColor.Red}
          leftChildren={<p>left content</p>}
          rightColor={BackgroundColor.Yellow}
          rightChildren={<p>right content</p>}
        />
      ))}
    </Layout>
  )
}

export default TravelPage
