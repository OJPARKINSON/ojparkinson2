import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bitmap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="portfolioContainer">
      <a href="https://www.harrisontateph.co.uk/" target="_blank" rel="noopener noreferrer">
        <Img fluid={data.file.childImageSharp.fluid} alt="Portfolio website" />
      </a>
      <a href="https://github.com/OJPARKINSON" target="_blank" rel="noopener noreferrer" className="githubLink">
        View more on GitHub
      </a>
    </div>
  );
};
