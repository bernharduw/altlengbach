import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const StyledButton = styled('button')`
  color: #fff;
  background-color: darkolivegreen;
  padding: 4px 16px;
`;

const Button = ({ to, ...props }) => {
  if (to) {
    return (
      <Link to={to}>
        <StyledButton {...props} />
      </Link>
    );
  }
  return <StyledButton {...props} />;
};

export default Button;
