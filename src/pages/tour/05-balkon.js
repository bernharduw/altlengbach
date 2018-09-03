import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
import AnimatedNavItem, { FadingIcon } from '../../components/AnimatedNavItem';
import { masterbedroom, balkon, garage } from '../../pagesByName';

const Balkon = ({
  data,
  previous = masterbedroom,
  current = balkon,
  next = garage,
}) => (
  <Layout>
    <Article>
      <Text>
        <H1>Der Ausblick vom Balkon</H1>
        <P>
          Vom zweiten Schlafzimmer aus gelangt man auf den Balkon mit tollem
          Blick in den Garten und die umliegenden Wiesen und Wälder.
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

export default Balkon;

export const query = graphql`
  query {
    image: file(name: { eq: "balkon-sw" }) {
      ...ImageFragment
    }
  }
`;
