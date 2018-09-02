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
import { stadl, garten, altlengbach } from '../../pagesByName';

const Garten = ({
  data,
  previous = stadl,
  current = garten,
  next = altlengbach,
}) => (
  <Layout>
    <Article>
      <AnimatedTextSection>
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

export default Garten;

export const query = graphql`
  query {
    image: file(name: { eq: "terrasse-s" }) {
      ...ImageFragment
    }
  }
`;
