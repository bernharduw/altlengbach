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
import { altlengbach, summary, index, contact } from '../../pagesByName';

const Summary = ({
  data,
  previous = altlengbach,
  current = summary,
  next = contact,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Die Highlights</h1>
        <ul>
          <li>4.388 m² Grundfläche</li>
          <li>Mehr als 200 m² Wohnfläche</li>
          <li>Große Garage mit ca. 70 m²</li>
          <li>Über 180 m² ausbaubarer Dachboden</li>
          <li>Mehrere getrennte Wohneinheiten möglich</li>
        </ul>
        <p>
          <strong>Kaufpreis: 480.000,00 €</strong>
        </p>

        <p>
          <Link to={contact.path}>Exposé anfordern</Link>
        </p>
        <p>
          <Link to={index.path} title={index.title}>
            Zur Startseite
          </Link>
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
