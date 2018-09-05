import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import { FadingIcon } from './AnimatedNavItem';

const padding = css`
  padding: 1em;

  @media (min-width: 960px) {
    padding-left: 3em;
    padding-right: 3em;
  }
`;

export const goldenRatio = css`
  @media (orientation: landscape) {
    flex: 0 38.1966%;
    max-width: 38.1966%;
    max-height: 100%;
    overflow: auto;
  }
`;

const Main = styled('main')`
  ${goldenRatio};
  min-height: 15em; // Define a minimum height so the text is not cut off too much.
  display: flex;
  flex-direction: column;
`;

const MainContent = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Display a small fading gradient at the top and bottom for scrolling.
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5em;
  }

  ::before {
    top: 0;
    background-image: linear-gradient(white, transparent);
  }

  ::after {
    bottom: 0;
    background-image: linear-gradient(transparent, white);
  }
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
  z-index: 1; // So the fading animation is on top of the white gradient below.
`;

const TextSection = ({ hideHome, children, ...props }) => (
  <Main {...props}>
    {hideHome ? null : (
      <HomeNav to="/" title="Startseite">
        <FadingIcon icon="home" />
      </HomeNav>
    )}
    <MainContent>
      <MainContentInner>{children}</MainContentInner>
    </MainContent>
  </Main>
);

export default TextSection;
