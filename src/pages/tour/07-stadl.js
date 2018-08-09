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
import { garage, stadl, garten } from '../../pagesByName';

const Galerie = ({
  data,
  previous = garage,
  current = stadl,
  next = garten,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Der Stadl</h1>
        <p>
          Das Nebengebäude bietet Stellplätze für landwirtschaftliche Fahrzeuge
          und eine weitere Einliegerwohnung.
        </p>
      </TextSection>

      <ImageSection>
        <Link to={next.path}>
          <FluidImage
            title={current.title}
            alt={current.name}
            file={data.image}
          />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem to={previous.path} title={previous.name}>
        <Icon icon="left" />
      </NavItem>
      <NavItem to={next.path} title={next.title}>
        {next.name} <Icon icon="right" />
      </NavItem>
    </NavBar>
  </Layout>
);

export default Galerie;

export const query = graphql`
  query {
    image: file(name: { eq: "stadl" }) {
      ...ImageFragment
    }
  }
`;
