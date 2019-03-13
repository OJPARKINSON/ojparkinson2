import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";
import ResponsivePlayer from "../components/ResponsivePlayer";
import TextBox from "../components/TextBox";
import ReactGithubCalendar from '@axetroy/react-github-calendar';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Oliver`, `Parkinson`, `Oliver Parkinson`, 'Oliver Parkinson software development', 'Oliver Parkinson Portfolio']} />
    <Header />
    <div className="container">
      <div className="side" id="side_about">
        <h3>about</h3>
      </div>
      <div className="about">
        <TextBox></TextBox>
        <TextBox></TextBox>
      </div>
      <div className="separator"></div>
      <div className="portfolio">
        <div className="side" id="side_portfolio">
          <h3>Portfolio</h3>
        </div>
        <ResponsivePlayer />
      </div>
      <div className="separator"></div>
      <div className="logoContainer">
        <img src={require("../images/gatsby-icon.png")} alt="GatsbyJS icon"/>
        <img src={require("../images/github-icon.svg")} alt="Github icon"/>
      </div>
      <div className="separator"></div>
      <div className="github-container">
      <ReactGithubCalendar name="OJPARKINSON" />

      </div>
    </div>
  </Layout>
)

export default IndexPage
