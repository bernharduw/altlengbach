import React from 'react';
import { graphql } from 'gatsby';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../components/Layout';
import FluidImage from '../components/FluidImage';

const IndexPage = ({ data }) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Ein charmanter Landsitz im Wienerwald</h1>
        <p>
          In Altlengbach, an einer ruhigen Nebenstraße, steht ein Haus zum
          Verkauf.
        </p>
      </TextSection>

      <ImageSection>
        <FluidImage title="Landsitz" alt="Landsitz" file={data.image} />
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem />
      <NavItem to="/tour/balkon">Tour starten</NavItem>
    </NavBar>
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
