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
import { balkon, garage, stadl } from '../../pagesByName';

const Garage = ({
  data,
  previous = balkon,
  current = garage,
  next = stadl,
}) => (
  <Layout>
    <Helmet>
      <title>{current.title}</title>
    </Helmet>

    <Article>
      <Text>
        <H1>Die Garage</H1>
        <P>Die Garage bietet genügend Platz für vier Fahrzeuge.</P>
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

export default Garage;

export const query = graphql`
  query {
    image: file(name: { eq: "garage" }) {
      ...ImageFragment
    }
  }
`;
