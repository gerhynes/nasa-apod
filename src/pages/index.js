import React from "react"

import Astronomy from "../components/astronomy"
import NasaDatePicker from "../components/nasaDatePicker"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NasaDatePicker />
    <Astronomy />
  </Layout>
)

export default IndexPage
