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

const Galerie = ({
  data,
  previous = { path: '/tour/02-wohnzimmer/', title: 'Wohnzimmer' },
  next = { path: '/tour/04-masterbedroom/', title: 'Schlafzimmer' },
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Die Galerie</h1>
        <p>
          Die Treppe ins Obergeschoss führt auf eine große Galerie, wo es genug
          Platz für einen Flügel und eine gemütliche Sitzecke im Erker gibt. Von
          hier aus geht es in insgesamt vier weitere Schlafzimmer.
        </p>
      </TextSection>

      <ImageSection>
        <Link to={next.path}>
          <FluidImage title="Die Galerie" alt="Galerie" file={data.image} />
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

export default Galerie;

export const query = graphql`
  query {
    image: file(name: { eq: "galerie-o" }) {
      ...ImageFragment
    }
  }
`;
