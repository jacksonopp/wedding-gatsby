import { graphql, PageProps } from "gatsby"
import React, { useEffect } from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import { BackgroundColor } from "../types/color"
import { AllScheduleItems } from "../types/schedulItem"
import * as moment from "moment-timezone"

interface Props extends PageProps {
  data: AllScheduleItems
}

const SchedulePage: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    let date = data.allContentfulScheduleItem.nodes[0].date
    date = moment.tz(date, "America/Chicago").format("MMMM DD, hh:mm A")
    console.log(date.split(", "))
  }, [data])

  return (
    <Layout pageTitle="Schedule">
      {data.allContentfulScheduleItem.nodes.map((row, i) => {
        const [date, time] = moment
          .tz(row.date, "America/Chicago")
          .format("MMMM DD, hh:mm A")
          .split(", ")
        return (
          <DuoToneRow
            key={i}
            leftColor={BackgroundColor.Yellow}
            leftChildren={
              <div className="flex flex-col items-center">
                <p className="text-2xl md:text-4xl">{date}</p>
                <p className="text-xl">{time}</p>
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
    allContentfulScheduleItem {
      nodes {
        title
        location
        date
      }
    }
  }
`

export default SchedulePage
