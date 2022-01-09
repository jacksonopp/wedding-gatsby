import { PageProps } from "gatsby"
import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import PageHeader from "../components/pageHeader"
import { BackgroundColor } from "../types/color.enum"

interface Props extends PageProps {}

const FaqPage: React.FC<Props> = ({}) => {
  return (
    <Layout pageTitle="FAQs">
      <PageDescription color={BackgroundColor.Red} pageTitle="FAQs">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio et,
          tenetur architecto ullam recusandae fugiat quasi minus enim velit
          expedita officiis ducimus illo deserunt nobis exercitationem nemo
          libero similique!
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
