import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
import AnimatedNavItem, { FadingIcon } from '../../components/AnimatedNavItem';
import { kueche, wohnzimmer, galerie } from '../../pagesByName';

const Wohnzimmer = ({
  data,
  previous = kueche,
  current = wohnzimmer,
  next = galerie,
}) => (
  <Layout>
    <Helmet>
      <title>{current.title}</title>
    </Helmet>
    <Article>
      <Text>
        <H1>Das Wohnzimmer</H1>
        <P>
          An die Küche grenzt das Wohnzimmer, das man über die zentrale Diele
          betritt. Der große Raum bietet Platz für entspannte Stunden.
        </P>
        <P>
          Ebenfalls im Erdgeschoss geht es weiter in das erste Schlafzimmer mit
          eigenem Bad und Toilette.
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
        <FadingIcon icon="left" />
      </NavItem>
      <AnimatedNavItem to={next.path} iconRight="right" title={next.title}>
        {next.name}{' '}
      </AnimatedNavItem>
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
