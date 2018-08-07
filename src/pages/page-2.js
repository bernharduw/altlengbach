import React from 'react';
import { graphql } from 'gatsby';

import Layout, { Link } from '../components/Layout';
import FluidImage from '../components/FluidImage';

const Balkon = ({ data }) => (
  <Layout
    image={
      <FluidImage title="Aussicht vom Balkon" alt="Balkon" file={data.image} />
    }
    navigation={
      <>
        <Link to="/">&laquo;</Link>
        <Link to="/">Wohnzimmer</Link>
      </>
    }
  >
    <h1>Der Balkon</h1>
    <p>Natur genießen.</p>
  </Layout>
);

export default Balkon;

export const query = graphql`
  query {
    image: file(name: { eq: "balkon-sw" }) {
      ...ImageFragment
    }
  }
`;
