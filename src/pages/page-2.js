import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Balkon = ({ data }) => (
  <Layout
    title="Balkon"
    alt="Balkon"
    file={data.image}
    navigation={
      <>
        <Link to="/">Go back to the homepage</Link>
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
