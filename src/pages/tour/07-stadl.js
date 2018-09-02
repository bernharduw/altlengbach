import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  NavBar,
  NavItem,
} from '../../components/MainLayout/MainLayout';
import AnimatedTextSection, {
  H1,
  P,
} from '../../components/MainLayout/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/MainLayout/AnimatedImage';
import Icon from '../../components/Icon';
import { garage, stadl, garten } from '../../pagesByName';

const Stadl = ({ data, previous = garage, current = stadl, next = garten }) => (
  <Layout>
    <Article>
      <AnimatedTextSection>
        <H1>Der Stadl</H1>
        <P>
          Das Nebengebäude bietet Stellplätze für landwirtschaftliche Fahrzeuge
          und eine weitere Einliegerwohnung.
        </P>
      </AnimatedTextSection>

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

export default Stadl;

export const query = graphql`
  query {
    image: file(name: { eq: "stadl" }) {
      ...ImageFragment
    }
  }
`;
