import React from 'react';
import { Link, graphql } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Das Bad</h1>
    <p>Verfliest mit Solnhofener Marmor, Fußbodenheizung inklusive.</p>
    <Img title="Bad" alt="Bad" fluid={data.file.childImageSharp.fluid} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query ImageQuery {
    file(name: { eq: "bad-n" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
