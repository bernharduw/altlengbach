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
import { galerie, masterbedroom, balkon } from '../../pagesByName';

const Masterbedroom = ({
  data,
  previous = galerie,
  current = masterbedroom,
  next = balkon,
}) => (
  <Layout>
    <Helmet>
      <title>{current.title}</title>
      <link rel="prerender" href={next.path} />
    </Helmet>
    <Article>
      <Text>
        <H1>Das Eltern-Schlafzimmer</H1>
        <P>Eines von insgesamt vier Schlafzimmern im Obergeschoss.</P>
        <P>
          Im nebenan liegenden Schlafzimmer, das sich über der Küche befindet,
          wurden bereits die notwendigen Anschlüsse für eine weitere Küche
          vorbereitet.
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

export default Masterbedroom;

export const query = graphql`
  query {
    image: file(name: { eq: "master-s" }) {
      ...ImageFragment
    }
  }
`;
