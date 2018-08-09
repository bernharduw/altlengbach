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
import { balkon, garage, stadl } from '../../pagesByName';

const Galerie = ({
  data,
  previous = balkon,
  current = garage,
  next = stadl,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Die Garage</h1>
        <p>Die Garage bietet genügend Platz für vier Fahrzeuge.</p>
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
    image: file(name: { eq: "garage" }) {
      ...ImageFragment
    }
  }
`;
