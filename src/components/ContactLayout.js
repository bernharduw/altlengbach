import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import './globalStyle';

const Page = styled('div')`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Main = styled('main')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: rgba(85, 107, 49, 0.8);
  color: #fff;

  a,
  h1,
  h2 {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const Content = styled('section')`
  flex: 1;
  overflow: scroll; // To enable scrolling in portrait mode.
  padding: 3em 1em 1em;

  @media (min-width: 960px) {
    padding-left: 3em;
    padding-right: 3em;
  }
`;

export const Section = styled('section')`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Text = styled('main')`
  flex: 1;
`;

export const Image = styled('aside')`
  flex: 1;
  max-width: 384px;
  background-color: rgba(85, 107, 49, 0.1);
`;

export const MainNav = styled('nav')`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  background-color: #fff;
  border-bottom: 3.45rem solid rgba(85, 107, 49, 0.8);

  @media (min-height: 480px) and (orientation: landscape) {
    border-bottom-width: 5.45rem;
  }

  a {
    text-decoration: none;
  }
`;

export const SubNav = styled('nav')`
  ${MainNav};
  background-color: darkolivegreen;
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: space-around;
  padding: 1rem;

  @media (min-height: 480px) and (orientation: landscape) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const NavItemExternal = NavItem.withComponent('a');

const Layout = ({ children }) => <Page>{children}</Page>;

export default Layout;
