import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import '../globalStyle';
import Icon from '../Icon';

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

const TextSection = ({ isHome, children, ...props }) => (
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

export default TextSection;
