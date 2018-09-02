import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
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
      <Text>
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
      </Text>

      <ImageSection>
        <AnimatedImage
          to={next.path}
          title={current.title}
          alt={current.name}
          file={data.image}
        />
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
