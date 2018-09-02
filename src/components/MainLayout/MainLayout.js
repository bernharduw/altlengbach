import React from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import { Link } from 'gatsby';

import '../globalStyle';
import Icon from '../Icon';
import AnimatedPage from '../AnimatedPage';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,600|Playfair+Display:700');

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
a {
  color: darkolivegreen;
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

export const Article = styled('article')`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll; // To enable scrolling in portrait mode.

  @media (orientation: landscape) {
    align-items: stretch;
    flex-direction: row;
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
  background-color: #7c8c62;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled('div')`
  flex: 1;
  display: flex;
  justify-content: stretch;
  background-color: darkolivegreen;
`;

export const NavItem = styled(Link)`
  display: inline-block;
  padding: 1rem;
  text-align: center;
  flex: 1;
  text-transform: uppercase;

  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }

  @media (min-height: 480px) and (orientation: landscape) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const NavBar = ({ children }) => (
  <NavOuter>
    <Contact>
      <NavItem to="/contact">
        <Icon icon="contact" /> Anfragen
      </NavItem>
      <NavItem to="/floor-plans/">
        Pläne <Icon icon="plans" />
      </NavItem>
    </Contact>
    <Nav>{children}</Nav>
  </NavOuter>
);

const Layout = styled(AnimatedPage)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default Layout;
