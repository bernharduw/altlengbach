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
import { balkon, garage, stadl } from '../../pagesByName';

const Garage = ({
  data,
  previous = balkon,
  current = garage,
  next = stadl,
}) => (
  <Layout>
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
        <Icon icon="left" />
      </NavItem>
      <NavItem to={next.path} title={next.title}>
        <AnimatedNavText>{next.name} </AnimatedNavText>
        <Icon icon="right" />
      </NavItem>
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
