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
  display: flex;
  flex-direction: column;

  // Display a small fading gradient at the bottom do signify there's more content.
  position: relative;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1em;
    background-image: linear-gradient(transparent, white);
  }
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
