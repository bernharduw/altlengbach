import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P, Li } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
import AnimatedNavItem, { FadingIcon } from '../../components/AnimatedNavItem';
import { altlengbach, summary, index, contact } from '../../pagesByName';

const Summary = ({
  data,
  previous = altlengbach,
  current = summary,
  next = contact,
}) => (
  <Layout>
    <Article>
      <Text>
        <H1>Die Highlights</H1>
        <ul>
          <Li>4.388 m² Grundfläche</Li>
          <Li>Mehr als 200 m² Wohnfläche</Li>
          <Li>Große Garage mit ca. 70 m²</Li>
          <Li>Über 180 m² ausbaubarer Dachboden</Li>
          <Li>Mehrere getrennte Wohneinheiten möglich</Li>
        </ul>
        <P>
          <strong>Kaufpreis: 480.000,00 €</strong>
        </P>

        <P>
          <Link to={contact.path}>Exposé anfordern</Link>
        </P>
        <P>
          <Link to={index.path} title={index.title}>
            Zur Startseite
          </Link>
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

export default Summary;

export const query = graphql`
  query {
    image: file(name: { eq: "haus-ansicht-mittel-2" }) {
      ...ImageFragment
    }
  }
`;
