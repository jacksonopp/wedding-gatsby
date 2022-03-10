import { graphql, PageProps } from "gatsby"
import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import { BackgroundColor } from "../types/color.enum"
import { IAllScheduleItems } from "../types/schedulItem.type"
import * as moment from "moment-timezone"

interface Props extends PageProps {
  data: IAllScheduleItems
}

const SchedulePage: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle="Schedule">
      {data.allContentfulScheduleItem.nodes.map(row => {
        const [date, time] = moment
          .tz(row.date, "America/Chicago")
          .format("MMMM DD, hh:mm A")
          .split(", ")
          console.log(time)
        return (
          <DuoToneRow
            key={row.id}
            leftColor={BackgroundColor.Yellow}
            leftChildren={
              <div className="flex flex-col items-center">
                <p className="text-3xl">{time}</p>
              </div>
            }
            rightColor={BackgroundColor.Blue}
            rightChildren={
              <div className="flex flex-col items-center">
                <p className="text-2xl md:text-4xl">{row.title}</p>
                <p className="text-xl">{row.location}</p>
              </div>
            }
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulScheduleItem(sort: { fields: date }) {
      nodes {
        title
        location
        date,
        id
      }
    }
  }
`

export default SchedulePage
