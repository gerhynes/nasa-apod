import React from "react"

import Astronomy from "../components/astronomy"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Astronomy />
    <p>
      All data is drawn from{" "}
      <a href="https://api.nasa.gov/">NASA's APOD API.</a>
    </p>
  </Layout>
)

export default IndexPage
