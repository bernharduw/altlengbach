import React from 'react';
import { Link } from 'gatsby';

import CardLayout from '../components/CardLayout';

const Balkon = ({ data }) => (
  <CardLayout
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
  </CardLayout>
);

export default Balkon;

export const query = graphql`
  query {
    image: file(name: { eq: "balkon-sw" }) {
      ...ImageFragment
    }
  }
`;
