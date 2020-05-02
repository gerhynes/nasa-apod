import React from "react"

import Astronomy from "../components/astronomy"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SPACE!</h1>
    <Astronomy />
  </Layout>
)

export default IndexPage
