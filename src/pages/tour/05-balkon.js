import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../../components/Layout';
import FluidImage from '../../components/FluidImage';
import Icon from '../../components/Icon';
import { masterbedroom, balkon, garage } from '../../pagesByName';

const Balkon = ({
  data,
  previous = masterbedroom,
  current = balkon,
  next = garage,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Der Ausblick vom Balkon</h1>
        <p>
          Vom zweiten Schlafzimmer aus gelangt man auf den Balkon mit tollem
          Blick in den Garten und die umliegenden Wiesen und Wälder.
        </p>
      </TextSection>

      <ImageSection>
        <Link to={next.path}>
          <FluidImage
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

export default Balkon;

export const query = graphql`
  query {
    image: file(name: { eq: "balkon-sw" }) {
      ...ImageFragment
    }
  }
`;
