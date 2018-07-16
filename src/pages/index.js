import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = ({ data }) => (
  <Layout
    title="Landsitz"
    file={data.image}
    navigation={<Link to="/page-2/">Tour starten</Link>}
  >
    <h1>Ein charmanter Landsitz im Wienerwald</h1>
    <p>
      In Altlengbach, an einer ruhigen Nebenstraße, steht ein Haus zum Verkauf.
    </p>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    image: file(name: { eq: "haus-frontal-fern-2" }) {
      ...ImageFragment
    }
  }
`;
