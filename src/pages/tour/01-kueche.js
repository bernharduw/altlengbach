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
import { index, kueche, wohnzimmer } from '../../pagesByName';

const Kueche = ({
  data,
  previous = index,
  current = kueche,
  next = wohnzimmer,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Die Küche</h1>
        <p>
          Die geräumige Landhausküche ist mit einer gemütlichen Sitzecke mit
          Jogltisch ausgestattet. Eine Speis und ein kleiner Vorbereitungsraum
          grenzen direkt an.
        </p>
        <p>
          Von der Küche gibt es einen Ausgang in den Garten mit zahlreichen
          Gemüse- und Kräuterbeeten.
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

export default Kueche;

export const query = graphql`
  query {
    image: file(name: { eq: "kueche-w" }) {
      ...ImageFragment
    }
  }
`;
