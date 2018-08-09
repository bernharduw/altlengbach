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

const Kueche = ({
  data,
  next = { path: '/tour/02-wohnzimmer', title: 'Wohnzimmer' },
  previous = { path: '/', title: 'Startseite' },
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
          <FluidImage title="Die Küche" alt="Küche" file={data.image} />
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

export default Kueche;

export const query = graphql`
  query {
    image: file(name: { eq: "kueche-w" }) {
      ...ImageFragment
    }
  }
`;
