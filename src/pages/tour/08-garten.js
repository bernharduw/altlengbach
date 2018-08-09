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
import { stadl, garten, altlengbach } from '../../pagesByName';

const Garten = ({
  data,
  previous = stadl,
  current = garten,
  next = altlengbach,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Der Naturgarten</h1>
        <p>
          Der Garten ist als romantischer Landhausgarten angelegt. Auf der
          Terrasse wurde Zogelsdorfer Sandstein verlegt.
        </p>
        <p>
          Ein großer Gemüse- und Kräutergarten, viele Beerensträucher, eine
          große Wiese sowie Nuss- und Apfelbäume im hinteren Teil des Gartens
          runden das Gesamtbild ab.
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

export default Garten;

export const query = graphql`
  query {
    image: file(name: { eq: "terrasse-s" }) {
      ...ImageFragment
    }
  }
`;
