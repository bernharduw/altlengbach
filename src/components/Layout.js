import React from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import { Link } from 'gatsby';
import './globalStyle';
import Icon from './Icon';
import TemplateWrapper from './TemplateWrapper';

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

const HomeNav = styled(Link)`
  display: block;
  text-align: center;
  padding: 0.5rem;
`;

export const TextSection = ({ isHome, children, ...props }) => (
  <Main {...props}>
    {isHome ? null : (
      <HomeNav to="/" title="Startseite">
        <Icon icon="home" />
      </HomeNav>
    )}
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
      <NavItem to="/floor-plans/">
        Pläne <Icon icon="plans" />
      </NavItem>
    </Contact>
    <Nav>{children}</Nav>
  </NavOuter>
);

const Layout = ({ children }) => (
  <TemplateWrapper>
    <Page>{children}</Page>
  </TemplateWrapper>
);

export default Layout;
