import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Typist from 'react-typist'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Oliver`, `Parkinson`, `Oliver Parkinson`, 'Oliver Parkinson software development', 'Oliver Parkinson Portfolio']} />
    <Header />
    <div className="Hero">
      <div className="scrollText">
        <Typist><h2>Welcome, <br /> Scroll to <br/> explore.</h2></Typist>
      </div>
    </div>
    <div className="container">
      <div className="firstBox">
        <h4>50</h4>
        <h5>Commits in the last year</h5>
      </div>
    </div>
  </Layout>
)

export default IndexPage
