import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  NavBar,
  NavItem,
} from '../../components/MainLayout/MainLayout';
import AnimatedTextSection, {
  H1,
  P,
} from '../../components/MainLayout/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/MainLayout/AnimatedImage';
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
      <AnimatedTextSection>
        <H1>Die Küche</H1>
        <P>
          Die geräumige Landhausküche ist mit einer gemütlichen Sitzecke mit
          Jogltisch ausgestattet. Eine Speis und ein kleiner Vorbereitungsraum
          grenzen direkt an.
        </P>
        <P>
          Von der Küche gibt es einen Ausgang in den Garten mit zahlreichen
          Gemüse- und Kräuterbeeten.
        </P>
      </AnimatedTextSection>

      <ImageSection>
        <Link to={next.path}>
          <AnimatedImage
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
