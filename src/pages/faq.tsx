import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

interface Props extends PageProps {
  
}

const FaqPage: React.FC<Props> = ({location}) => {
  console.log(location)
  return (
    <Layout pageTitle="FAQ">
      <h1>FAQ</h1>
    </Layout>
  )
}

export default FaqPage
