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
import { galerie, masterbedroom, balkon } from '../../pagesByName';

const Masterbedroom = ({
  data,
  previous = galerie,
  current = masterbedroom,
  next = balkon,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Das Eltern-Schlafzimmer</h1>
        <p>Eines von insgesamt vier Schlafzimmern im Obergeschoss.</p>
        <p>
          Im nebenan liegenden Schlafzimmer, das sich über der Küche befindet,
          wurden bereits die notwendigen Anschlüsse für eine weitere Küche
          vorbereitet.
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

export default Masterbedroom;

export const query = graphql`
  query {
    image: file(name: { eq: "master-s" }) {
      ...ImageFragment
    }
  }
`;
