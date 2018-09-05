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
            <h2>
              <a href="http://www.immobilien86.at/objektdetail/2575082">
                Immobilien 86
              </a>
            </h2>

            <p>
              akad. IM Wolfgang Steiner
              <br />
              Tel.: <a href="tel:+436506286281">+43 650 6286281</a>
              <br />
              Mail:{' '}
              <a href="wsteiner@immobilien86.at">wsteiner@immobilien86.at</a>
            </p>
          </Text>
          <Image>
            <FluidImage
              title={current.title}
              alt={current.name}
              file={data.image}
            />
          </Image>
        </Section>

        <Section>
          <Text>
            <h2>Gestaltung, Programmierung</h2>
            <p>
              Bernhard Gschwantner <br />
              Tel.: <a href="tel:+4369919713296">+43 6991 9713296</a>
              <br />
              Mail:{' '}
              <a href="kontakt.altlengbach@datenbankdesign.com">
                kontakt.altlengbach@datenbankdesign.com
              </a>
              <br />
              Web: <a href="http://www.dns.co.at">www.dns.co.at</a>
            </p>
          </Text>
        </Section>
      </Content>
      <SubNav>
        <NavItemExternal
          href="http://www.immobilien86.at/objektdetail/2575082"
          title="Landhaus auf Immobilien86"
        >
          Objekt auf immobilien86.at
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
