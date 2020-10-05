import React from "react"

import Astronomy from "../components/astronomy"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Astronomy />
  </Layout>
)

export default IndexPage
