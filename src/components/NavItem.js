import styled from 'react-emotion';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
  display: inline-block;
  padding: 1rem;
  text-align: center;
  flex: 1;
  text-transform: uppercase;
  white-space: nowrap;
  max-width: 100%;

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

export default NavItem;
