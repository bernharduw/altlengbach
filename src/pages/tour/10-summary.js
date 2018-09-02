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
  Li,
} from '../../components/MainLayout/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/MainLayout/AnimatedImage';
import Icon from '../../components/Icon';
import { altlengbach, summary, index, contact } from '../../pagesByName';

const Summary = ({
  data,
  previous = altlengbach,
  current = summary,
  next = contact,
}) => (
  <Layout>
    <Article>
      <AnimatedTextSection>
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
        {next.name} <Icon icon="contact" />
      </NavItem>
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
