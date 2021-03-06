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
import { wohnzimmer, galerie, masterbedroom } from '../../pagesByName';

const Galerie = ({
  data,
  previous = wohnzimmer,
  current = galerie,
  next = masterbedroom,
}) => (
  <Layout>
    <Helmet>
      <title>{current.title}</title>
    </Helmet>

    <Article>
      <Text>
        <H1>Die Galerie</H1>
        <P>
          Die Treppe ins Obergeschoss führt auf eine große Galerie, wo es genug
          Platz für einen Flügel und eine gemütliche Sitzecke im Erker gibt.
        </P>
        <P>
          Von hier aus geht es in insgesamt vier weitere Schlafzimmer, ein
          zweites Badezimmer und ein separates WC.
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

export default Galerie;

export const query = graphql`
  query {
    image: file(name: { eq: "galerie-o" }) {
      ...ImageFragment
    }
  }
`;
