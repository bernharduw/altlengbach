import React from 'react';
import { graphql } from 'gatsby';

import Layout, {
  Content,
  Main,
  Section,
  Text,
  Image,
  MainNav,
  SubNav,
  NavItem,
  NavItemExternal,
} from '../components/ContactLayout';
import FluidImage from '../components/FluidImage';
import Icon from '../components/Icon';
import { index, contact } from '../pagesByName';

const Summary = ({ data, previous = index, current = contact }) => (
  <Layout>
    <Main>
      <Content>
        <h1>Anfragen</h1>
        <p>
          Alle Anfragen zum Landhaus richten Sie bitte direkt an unseren
          Immobilienmakler:
        </p>
        <Section>
          <Text>
            <article>
              <section>
                <h2>akad. IM Wolfgang Steiner</h2>
                <p>
                  Tel.: <a href="tel:+436506286281">+43 6506286281</a>
                  <br />
                  Mail:{' '}
                  <a href="wsteiner@immobilien86.at">
                    wsteiner@immobilien86.at
                  </a>
                  <br />
                  Web:{' '}
                  <a href="http://www.immobilien86.at">www.immobilien86.at</a>
                </p>
              </section>
            </article>
          </Text>
          <Image>
            <FluidImage
              title={current.title}
              alt={current.name}
              file={data.image}
            />
          </Image>
        </Section>
      </Content>
      <SubNav>
        <NavItemExternal
          href="http://www.immobilien86.at/objektdetail/2575082"
          title="Landhaus auf Immobilien86"
        >
          Zur Objektseite auf www.immobilien86.at
        </NavItemExternal>
      </SubNav>
    </Main>
    <MainNav>
      <NavItem to={previous.path} title={previous.name}>
        <Icon icon="right" />
      </NavItem>
    </MainNav>
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
