import React from 'react'
import DuoToneRow from '../components/duoToneRow'
import Layout from '../components/layout'
import { BackgroundColor } from '../types/color'

interface Props {
  
}

const SchedulePage = (props: Props) => {
  return (
    <Layout pageTitle="Schedule">
      {Array.from([,,,,,,]).map((unused, i) => (
        <DuoToneRow 
          key={i} 
          leftColor={BackgroundColor.Yellow}
          leftChildren={<p>left content</p>} 
          rightColor={BackgroundColor.Blue}
          rightChildren={<p>right content</p>}
        />
      ))}
    </Layout>
  )
}

export default SchedulePage
