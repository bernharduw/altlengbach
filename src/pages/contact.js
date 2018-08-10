import React from 'react';
import { graphql } from 'gatsby';

import Layout, {
  Content,
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../components/ContactLayout';
import FluidImage from '../components/FluidImage';
import Icon from '../components/Icon';
import { index, contact } from '../pagesByName';

const Summary = ({ data, previous = index, current = contact }) => (
  <Layout>
    <Content>
      <h1>Anfragen</h1>
      <p>
        Alle Anfragen zum Landhaus richten Sie bitte direkt an unseren
        Immobilienmakler:
      </p>
      <Article>
        <TextSection>
          <article>
            <section>
              <h2>akad. IM Wolfgang Steiner</h2>
              <p>
                Tel.: <a href="tel:+436506286281">+43 6506286281</a>
                <br />
                Mail:{' '}
                <a href="wsteiner@immobilien86.at">wsteiner@immobilien86.at</a>
              </p>

              <p>
                <a
                  href="http://www.immobilien86.at/objektdetail/2575082"
                  title="Wolfgang Steiner, Immobilien86"
                >
                  Zur Website von Immobilien86
                </a>
              </p>
            </section>
          </article>
        </TextSection>
        <ImageSection>
          <FluidImage
            title={current.title}
            alt={current.name}
            file={data.image}
          />
        </ImageSection>
      </Article>
    </Content>

    <NavBar>
      <NavItem to={previous.path} title={previous.name}>
        <Icon icon="right" />
      </NavItem>
    </NavBar>
  </Layout>
);

export default Summary;

export const query = graphql`
  query {
    image: file(name: { eq: "wolfgang-steiner" }) {
      ...ImageFragment
    }
  }
`;
