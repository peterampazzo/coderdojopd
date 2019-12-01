import React from "react"
import { Layout } from "antd"

import Header from "../components/header"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Banner from "./banner"

export default ({ children }) => (
  <div>
    <Layout>
      <NavBar />
      <Header />
      {children}
      <Banner />
      <Footer />
    </Layout>
  </div>
)
