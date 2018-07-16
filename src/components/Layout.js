import React from 'react';
import FluidImage from '../components/FluidImage';
import styled, { injectGlobal } from 'react-emotion';

import './global.css'; // Default Gatsby CSS

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display:700');
body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}
`;

const Page = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Article = styled('article')`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Main = styled('main')`
  flex: 0 38.1966%;
  padding: 16px;
`;

const Aside = styled('aside')`
  flex: 1;
  width: 100%;

  .gatsby-image-wrapper div:first-child {
    padding-bottom: 100vh !important;
  }
`;

const NavBar = styled('nav')`
  display: flex;
  z-index: 1;
`;

const Contact = styled('div')`
  flex: 0 38.1966%;
  padding: 16px;
  background-color: floralwhite;
`;

const Nav = styled('div')`
  flex: 1;
  display: flex;
  padding: 16px;
  background-color: antiquewhite;
`;

const ImageSection = ({ file, title, alt, children, navigation }) => (
  <Page>
    <Article>
      <Main>{children}</Main>
      <Aside>
        <FluidImage title={title} alt={alt} file={file} />
      </Aside>
    </Article>
    <NavBar>
      <Contact>Kontakt</Contact>
      <Nav>{navigation}</Nav>
    </NavBar>
  </Page>
);

export default ImageSection;
