import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Astronomy from "../components/astronomy";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Astronomy />
  </Layout>
);

export default IndexPage;
