import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';

import '../globalStyle';
import Icon from '../Icon';
import AnimatedPage from '../AnimatedPage';

const padding = css`
  padding: 1em;

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

export const Article = styled('article')`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: visible; // To enable z-index for the plans.

  @media (orientation: landscape) {
    align-items: stretch;
    flex-direction: row;
  }
`;

const Main = styled('main')`
  ${goldenRatio};
  display: flex;
  flex-direction: column;
`;

const MainContent = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainContentInner = styled('div')`
  ${padding};
  padding-top: 2em;
  padding-bottom: 2em;
  max-height: 100%;
  overflow: auto;
`;

export const TextSection = ({ isHome, children, ...props }) => (
  <Main {...props}>
    <MainContent>
      <MainContentInner>{children}</MainContentInner>
    </MainContent>
  </Main>
);

export const ImageSection = styled('aside')`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(85, 107, 49, 0.1);

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
  background-color: rgba(85, 107, 47, 0.8);
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
      <NavItem to="/">
        Startseite <Icon icon="home" />
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
