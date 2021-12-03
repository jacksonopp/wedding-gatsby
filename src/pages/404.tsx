import * as React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout
    pageTitle="Page not found"
  >
    <main className="py-8">
      <p className="text-3xl text-center">
        Sorry, looks like this page doesn't exist...
      </p>
    </main>
  </Layout>
)

export default NotFoundPage
