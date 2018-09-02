import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
import AnimatedNavText from '../../components/AnimatedNavText';
import Icon from '../../components/Icon';
import { galerie, masterbedroom, balkon } from '../../pagesByName';

const Masterbedroom = ({
  data,
  previous = galerie,
  current = masterbedroom,
  next = balkon,
}) => (
  <Layout>
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
        <Icon icon="left" />
      </NavItem>
      <NavItem to={next.path} title={next.title}>
        <AnimatedNavText>{next.name} </AnimatedNavText>
        <Icon icon="right" />
      </NavItem>
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
