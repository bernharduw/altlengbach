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
import { kueche, wohnzimmer, galerie } from '../../pagesByName';

const Wohnzimmer = ({
  data,
  previous = kueche,
  current = wohnzimmer,
  next = galerie,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Das Wohnzimmer</h1>
        <p>
          An die Küche grenzt das Wohnzimmer, das man über die zentrale Diele
          betritt. Der große Raum bietet Platz für entspannte Stunden.
        </p>
        <p>
          Ebenfalls im Erdgeschoss geht es weiter in das erste Schlafzimmer mit
          eigenem Bad und Toilette.
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

export default Wohnzimmer;

export const query = graphql`
  query {
    image: file(name: { eq: "wohnzimmer-w" }) {
      ...ImageFragment
    }
  }
`;
