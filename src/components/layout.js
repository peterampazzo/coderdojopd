import React from "react"
import { Layout } from "antd"

import SEO from "../components/SEO"
import Header from "../components/header"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Banner from "./banner"

export default props => (
  <div>
    <Layout>
      <SEO title={props.pageTitle} description={props.pageDesc} />
      <NavBar />
      <Header />
      {props.children}
      <Banner />
      <Footer />
    </Layout>
  </div>
)
