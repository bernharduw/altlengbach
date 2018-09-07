import styled from 'react-emotion';
import posed from 'react-pose';

import MainLayout from './MainLayout';
import BaseNavItem from './NavItem';

export const Main = styled('main')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: rgba(85, 107, 49, 0.8);
  color: #fff;
  max-width: 100vw;

  a,
  h1,
  h2,
  h3 {
    color: rgba(255, 255, 255, 0.75);
  }

  h1 a,
  h2 a,
  h3 a {
    text-decoration: none;
  }
`;

export const Content = styled('section')`
  padding: 3em 1em 1em;
  flex: 1;
  overflow-y: auto; // Show long content.

  @media (min-width: 960px) {
    display: flex;
  }
`;

export const Flex = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Box = styled('div')`
  flex: ${props => props.flex || '1'};

  @media (min-width: 960px) {
    padding: 0 1em;

    & & {
      padding-left: 0;
    }
  }
`;

export const Image = styled('aside')`
  flex: ${props => props.flex || '1'};
  max-width: 384px;
`;

const AnimatedNav = posed.div({
  enteringLeft: { opacity: 0 },
  enterLeft: { opacity: 1 },
  // exitLeft: { opacity: 0, delay: 150 },
  // enteringRight: { opacity: 0 },
  // enterRight: { opacity: 1, delay: 300 },
  exitRight: { opacity: 0, delay: 150 },
});

export const MainNav = styled(AnimatedNav)`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border-bottom: 3.45rem solid #7c8c63;

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

export const NavItem = styled(BaseNavItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  :only-child {
    text-align: center;
  }
`;

export const NavItemExternal = NavItem.withComponent('a');

const Layout = styled(MainLayout)`
  flex-direction: row;
`;

export default Layout;
