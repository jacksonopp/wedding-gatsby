import React from "react"
import DuoToneRow from "../components/duoToneRow"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import ThingToDo from "../components/thingToDo"
import { BackgroundColor } from "../types/color"

interface Props {}

const ThingsToDoPage = (props: Props) => {
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
      {Array.from([, , , , , ,]).map((_, i) => (
        <DuoToneRow
          key={i}
          leftColor={BackgroundColor.Green}
          leftChildren={<ThingToDo link="#" title="title"/>}
          rightColor={BackgroundColor.Purple}
          rightChildren={<ThingToDo link="#" title="title"/>}
        />
      ))}
    </Layout>
  )
}

export default ThingsToDoPage
