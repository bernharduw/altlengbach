import React from 'react';
import { graphql } from 'gatsby';

import Layout, { Link } from '../components/Layout';
import FluidImage from '../components/FluidImage';

const IndexPage = ({ data }) => (
  <Layout
    image={<FluidImage title="Landsitz" alt="Landsitz" file={data.image} />}
    navigation={<Link to="/balkon-ausblick">Tour starten</Link>}
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
