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
import { wohnzimmer, galerie, masterbedroom } from '../../pagesByName';

const Galerie = ({
  data,
  previous = wohnzimmer,
  current = galerie,
  next = masterbedroom,
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
    image: file(name: { eq: "galerie-o" }) {
      ...ImageFragment
    }
  }
`;
