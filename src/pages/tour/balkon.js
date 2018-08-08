import React from 'react';
import { graphql } from 'gatsby';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../../components/Layout';
import FluidImage from '../../components/FluidImage';
import Icon from '../../components/Icon';

const Balkon = ({ data }) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Der Balkon</h1>
        <p>Natur genießen.</p>
      </TextSection>

      <ImageSection>
        <FluidImage
          title="Aussicht vom Balkon"
          alt="Balkon"
          file={data.image}
        />
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem to="/">
        <Icon icon="left" />
      </NavItem>
      <NavItem to="/">
        Wohnzimmer <Icon icon="right" />
      </NavItem>
    </NavBar>
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
