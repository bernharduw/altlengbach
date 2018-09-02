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
import { galerie, masterbedroom, balkon } from '../../pagesByName';

const Masterbedroom = ({
  data,
  previous = galerie,
  current = masterbedroom,
  next = balkon,
}) => (
  <Layout>
    <Article>
      <AnimatedTextSection>
        <H1>Das Eltern-Schlafzimmer</H1>
        <P>Eines von insgesamt vier Schlafzimmern im Obergeschoss.</P>
        <P>
          Im nebenan liegenden Schlafzimmer, das sich über der Küche befindet,
          wurden bereits die notwendigen Anschlüsse für eine weitere Küche
          vorbereitet.
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

export default Masterbedroom;

export const query = graphql`
  query {
    image: file(name: { eq: "master-s" }) {
      ...ImageFragment
    }
  }
`;
