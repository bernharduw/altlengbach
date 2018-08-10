import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import './globalStyle';

const Page = styled('div')`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Content = styled('article')`
  flex: 1;
  overflow: scroll; // To enable scrolling in portrait mode.
  border-bottom: 5.45rem solid darkolivegreen;
  padding: 3em 1em 1em;
  background-color: rgba(85, 107, 49, 0.8);
  color: #fff;

  @media (min-width: 960px) {
    padding-left: 3em;
    padding-right: 3em;
  }

  a,
  h1,
  h2 {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const Article = styled('article')`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const TextSection = styled('main')`
  flex: 1;
`;

export const ImageSection = styled('aside')`
  flex: 1;
  max-width: 512px;
  background-color: rgba(85, 107, 49, 0.1);
`;

const Nav = styled('nav')`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  background-color: #fff;
  border-bottom: 5.45rem solid rgba(85, 107, 49, 0.8);

  a {
    text-decoration: none;
  }
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

export const NavBar = ({ children }) => <Nav>{children}</Nav>;

const Layout = ({ children }) => <Page>{children}</Page>;

export default Layout;
