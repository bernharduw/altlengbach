import React from 'react';
import styled from 'react-emotion';

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
