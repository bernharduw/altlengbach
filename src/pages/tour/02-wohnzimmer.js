import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
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

export default Wohnzimmer;

export const query = graphql`
  query {
    image: file(name: { eq: "wohnzimmer-w" }) {
      ...ImageFragment
    }
  }
`;
