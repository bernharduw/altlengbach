import React from 'react';
import posed from 'react-pose';
import styled from 'react-emotion';

import NavItem from './NavItem';
import Icon from './Icon';

const transition = {
  x: { ease: 'easeOut', duration: 700 },
  y: { ease: 'easeOut' },
  rotate: { duration: 500 },
};

const above = {
  y: '-100%',
  opacity: 0,
  transition,
};
const normal = {
  x: 0,
  y: 0,
  opacity: 1,
  delay: 200,
  transition,
};
const below = {
  y: '100%',
  opacity: 0,
  transition,
};
const AnimatedNavText = styled(
  posed.span({
    entering: below,
    enter: normal,
    enteringNext: below,
    enterNext: normal,
    exitNext: above,
    enteringPrevious: above,
    enterPrevious: normal,
    exitPrevious: below,
    enteringLevelUp: above,
    enterLevelUp: normal,
    exitLevelUp: below,
    enteringLevelDown: above,
    enterLevelDown: normal,
    exitLevelDown: below,
  })
)`
  display: inline-block;
`;

const AnimatedNavItem = ({ iconLeft, iconRight, children, ...rest }) => (
  <NavItem {...rest}>
    <AnimatedNavText>
      {iconLeft && <Icon icon={iconLeft} />}
      {children}
      {iconRight && <Icon icon={iconRight} />}
    </AnimatedNavText>
  </NavItem>
);

export default AnimatedNavItem;

const transparent = { opacity: 0, transition };
const opaque = { opacity: 1, x: 0, transition };
const Fade = styled(
  posed.div({
    entering: below,
    enter: { ...normal, delay: 50 },
    enteringNext: transparent,
    enterNext: opaque,
    exitNext: { ...transparent, delay: 200 },
    exitPrevious: transparent,
  })
)`
  display: inline-block;
`;

export const FadingIcon = props => (
  <Fade>
    <Icon {...props} />
  </Fade>
);
