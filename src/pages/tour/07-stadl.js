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
import { garage, stadl, garten } from '../../pagesByName';

const Stadl = ({ data, previous = garage, current = stadl, next = garten }) => (
  <Layout>
    <Article>
      <Text>
        <H1>Der Stadl</H1>
        <P>
          Das Nebengebäude bietet Stellplätze für landwirtschaftliche Fahrzeuge
          und eine weitere Einliegerwohnung.
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

export default Stadl;

export const query = graphql`
  query {
    image: file(name: { eq: "stadl" }) {
      ...ImageFragment
    }
  }
`;
