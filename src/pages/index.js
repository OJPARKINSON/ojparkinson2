import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";
import "../components/header.css"
import Card from "../components/card";

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" keywords={[`Oliver`, `Parkinson`, `Oliver Parkinson`, 'Oliver Parkinson software development', 'Oliver Parkinson Portfolio']} />
    <Header />
    <div className="Hero">
      <div className="scrollText">
        <h2>Welcome, <br /> Scroll to <br/> explore.</h2>
      </div>
    </div>
    <Card widthone={{width:'25%'}} widthtwo={{width:'75%'}} contentone="Harrison Tate" contenttwo="hello" />
  </Layout>
)

export default IndexPage
