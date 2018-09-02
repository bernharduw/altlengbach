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
import { stadl, garten, altlengbach } from '../../pagesByName';

const Garten = ({
  data,
  previous = stadl,
  current = garten,
  next = altlengbach,
}) => (
  <Layout>
    <Article>
      <Text>
        <H1>Der Naturgarten</H1>
        <P>
          Der Garten ist als romantischer Landhausgarten angelegt. Auf der
          Terrasse wurde Zogelsdorfer Sandstein verlegt.
        </P>
        <P>
          Ein großer Gemüse- und Kräutergarten, viele Beerensträucher, eine
          große Wiese sowie Nuss- und Apfelbäume im hinteren Teil des Gartens
          runden das Gesamtbild ab.
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

export default Garten;

export const query = graphql`
  query {
    image: file(name: { eq: "terrasse-s" }) {
      ...ImageFragment
    }
  }
`;
