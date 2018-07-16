import React from 'react';
import { Link, graphql } from 'gatsby';

import ImageSection from '../components/ImageSection';
import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <ImageSection title="Landsitz" file={data.haus}>
      <h1>Ein charmanter Landsitz im Wienerwald</h1>
      <p>
        In Altlengbach, an einer ruhigen Nebenstraße, steht ein Haus zum
        Verkauf.
      </p>
    </ImageSection>

    <ImageSection title="Balkon" alt="Balkon" file={data.balkon}>
      <h2>Der Balkon</h2>
      <p>Natur genießen.</p>
    </ImageSection>

    <ImageSection title="Bad" alt="Bad" file={data.bad}>
      <h2>Das Bad</h2>
      <p>Verfliest mit Solnhofener Marmor, Fußbodenheizung inklusive.</p>
    </ImageSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query ImageQuery {
    haus: file(name: { eq: "haus-frontal-fern-2" }) {
      ...ImageFragment
    }
    bad: file(name: { eq: "bad-n" }) {
      ...ImageFragment
    }
    balkon: file(name: { eq: "balkon-sw" }) {
      ...ImageFragment
    }
  }
`;
