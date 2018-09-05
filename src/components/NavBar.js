import React from 'react';
import styled from 'react-emotion';
import posed from 'react-pose';

import NavItem from './NavItem';
import Icon from './Icon';
import { goldenRatio } from './TextSection';

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
  @media (max-width: 640px) {
    // Fix for displaying only the icon.
    font-size: 0;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  ${goldenRatio};
  background-color: #7c8c62;
  display: flex;
  justify-content: space-between;
`;

const transparent = 'rgba(85, 107, 47, 0)';
const darkolivegreen = 'rgba(85, 107, 47, 1)';

const AnimatedNav = posed.div({
  enteringNext: { backgroundColor: transparent },
  enterNext: { backgroundColor: darkolivegreen, delay: 300 },
  exitNext: { backgroundColor: darkolivegreen, delay: 600 },
  enteringPrevious: { backgroundColor: transparent },
  enterPrevious: { backgroundColor: darkolivegreen, delay: 300 },
  exitPrevious: { backgroundColor: darkolivegreen, delay: 600 },
});

const Nav = styled(AnimatedNav)`
  flex: 1;
  display: flex;
  justify-content: stretch;
  background-color: darkolivegreen;

  > :first-child {
    flex: auto;
  }
`;

const NavBar = ({
  children,
  secondaryItem = (
    <NavItem to="/floor-plans/">
      Pläne <Icon icon="plans" />
    </NavItem>
  ),
}) => (
  <NavOuter>
    <Contact>
      <NavItem to="/contact">
        <Icon icon="contact" /> Anfragen
      </NavItem>
      {secondaryItem}
    </Contact>
    <Nav>{children}</Nav>
  </NavOuter>
);

export default NavBar;
