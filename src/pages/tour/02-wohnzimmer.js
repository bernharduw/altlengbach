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

const Wohnzimmer = ({
  data,
  previous = { path: '/tour/01-kueche/', title: 'Küche' },
  next = { path: '/tour/03-galerie/', title: 'Galerie' },
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
            title="Das Wohnzimmer"
            alt="Wohnzimmer"
            file={data.image}
          />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem to={previous.path} title={previous.title}>
        <Icon icon="left" />
      </NavItem>
      <NavItem to={next.path}>
        {next.title} <Icon icon="right" />
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
