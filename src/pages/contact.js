import React from 'react';
import { graphql } from 'gatsby';

import Layout, {
  Content,
  Main,
  Flex,
  Box,
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
        <Box flex="3">
          <h2>Anfragen</h2>
          <p>
            Alle Anfragen zum Landhaus richten Sie bitte direkt an unseren
            Immobilienmakler:
          </p>
          <Flex>
            <Box flex="3">
              <h3>
                <a href="http://www.immobilien86.at/objektdetail/2575082">
                  Immobilien 86
                </a>
              </h3>

              <p>akad. IM Wolfgang Steiner</p>
              <p>
                Tel.: <a href="tel:+436506286281">+43 650 6286281</a>
                <br />
                Mail:{' '}
                <a href="wsteiner@immobilien86.at">wsteiner@immobilien86.at</a>
                <br />
                Web:{' '}
                <a href="http://www.immobilien86.at">www.immobilien86.at</a>
              </p>
            </Box>
            <Image flex="2">
              <FluidImage
                title={current.title}
                alt={current.name}
                file={data.image}
              />
            </Image>
          </Flex>
        </Box>

        <Box flex="2">
          <h3>Gestaltung, Programmierung</h3>
          <p>
            Bernhard Gschwantner <br />
            Tel.: <a href="tel:+4369919713296">+43 6991 9713296</a>
            <br />
            Mail:{' '}
            <a href="landhaus@datenbankdesign.com">
              landhaus@datenbankdesign.com
            </a>
            <br />
            Web: <a href="http://www.dns.co.at">www.dns.co.at</a>
          </p>
        </Box>
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
