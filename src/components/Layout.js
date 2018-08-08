import React from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import { Link } from 'gatsby';
import './globalStyle';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display:700');

@media (max-width: 768px) {
  html {
    font-size: 100%;
  }
}

@media (min-width: 1281px) {
  html {
    font-size: 150%;
  }
}

body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: darkolivegreen;
}
`;

const padding = css`
  padding: 16px;

  @media (min-width: 960px) {
    padding-left: 3em;
    padding-right: 3em;
  }
`;

const goldenRatio = css`
  @media (orientation: landscape) {
    flex: 0 38.1966%;
    max-width: 38.1966%;
    max-height: 100%;
    overflow: auto;
  }
`;

const Page = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Article = styled('article')`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll; // To enable scrolling in portrait mode.

  @media (orientation: landscape) {
    align-items: center;
    flex-direction: row;
  }
`;

export const TextSection = styled('main')`
  ${goldenRatio};
  ${padding};
  padding-top: 3em;
`;

export const ImageSection = styled('aside')`
  flex: 1;
  width: 100%;
  height: 100%;

  // Fix the gatsby image.
  .gatsby-image-wrapper,
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .gatsby-image-wrapper div:first-child {
    height: 100%;
    padding-bottom: 0 !important;
  }
`;

const NavOuter = styled('nav')`
  display: flex;
  z-index: 1;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Contact = styled('div')`
  ${goldenRatio};
  background-color: #8f9e77;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled('div')`
  flex: 1;
  display: flex;
  justify-content: space-between;
  background-color: darkolivegreen;
`;

export const NavItem = styled(Link)`
  display: inline-block;

  ${padding};
  @media (min-height: 480px) and (orientation: landscape) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const NavBar = ({ children }) => (
  <NavOuter>
    <Contact>
      <NavItem to="/contact">Kontakt</NavItem>
      <NavItem to="/maps/">Pläne</NavItem>
    </Contact>
    <Nav>{children}</Nav>
  </NavOuter>
);

const Layout = ({ children }) => <Page>{children}</Page>;

export default Layout;
