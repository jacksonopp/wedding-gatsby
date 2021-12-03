import { PageProps } from "gatsby"
import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import { BackgroundColor } from "../types/color"

interface Props extends PageProps {}

const FaqPage: React.FC<Props> = ({ location }) => {
  console.log(location)
  return (
    <Layout pageTitle="FAQs">
      <PageDescription color={BackgroundColor.Red} pageTitle="FAQs">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente
          non adipisci dolor enim autem sit beatae rerum iure. Maiores odit
          suscipit vero rerum officiis neque fugiat animi. Consequuntur,
          deleniti.
        </p>
      </PageDescription>
      {Array.from([, , , , ,]).map((_, i) => (
        <DuoToneRow
          key={i}
          leftColor={BackgroundColor.Blue}
          leftChildren={<p>Left children</p>}
          rightColor={BackgroundColor.Yellow}
          rightChildren={<p>Right children</p>}
        />
      ))}
    </Layout>
  )
}

export default FaqPage
