import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../../components/Layout';
import FluidImage from '../../components/FluidImage';
import Icon from '../../components/Icon';

const prevURL = '/';
const nextURL = '/tour/02-wohnzimmer';

const Kueche = ({ data }) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Die Küche</h1>
        <p>Eine gemütliche Küche im Landhausstil.</p>
      </TextSection>

      <ImageSection>
        <Link to={nextURL}>
          <FluidImage title="Die Küche" alt="Küche" file={data.image} />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem to={prevURL}>
        <Icon icon="left" />
      </NavItem>
      <NavItem to={nextURL}>
        Wohnzimmer <Icon icon="right" />
      </NavItem>
    </NavBar>
  </Layout>
);

export default Kueche;

export const query = graphql`
  query {
    image: file(name: { eq: "kueche-w" }) {
      ...ImageFragment
    }
  }
`;
