import { graphql, PageProps } from "gatsby"
import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import PageHeader from "../components/pageHeader"
import { BackgroundColor } from "../types/color.enum"
import { IAllFaq } from "../types/faq.type"

interface Props extends PageProps {
  data: IAllFaq
}

const FaqPage: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="FAQs">
      <PageDescription color={BackgroundColor.Red} pageTitle="FAQs">
        <p>{data.contentfulPageHeaderSection.headerContent.headerContent}</p>
      </PageDescription>
      {data.allContentfulFaq.nodes.map((row) => (
        <DuoToneRow
          key={row.id}
          leftColor={BackgroundColor.Blue}
          leftChildren={<p>{row.question}</p>}
          rightColor={BackgroundColor.Yellow}
          rightChildren={<p>{row.answer.answer}</p>}
        />
      ))}
    </Layout>
  )
}

export default FaqPage

// TODO: Change slug
export const data = graphql`
  query {
    allContentfulFaq(sort: { fields: createdAt, order: ASC }) {
      nodes {
        id
        question
        answer {
          answer
        }
      }
    }
    contentfulPageHeaderSection(slug: { eq: "lorem" }) {
      headerContent {
        headerContent
      }
    }
  }
`
