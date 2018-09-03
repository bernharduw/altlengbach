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

const left = {
  x: '-61.81vw',
  opacity: 0,
  transition,
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
    // exitNext: {
    //   ...left,
    //   transition: {
    //     ...transition,
    //     opacity: { delay: 1000 },
    //     x: { ...transition.x, delay: 100 },
    //   },
    // },
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

const rotatedLeft = { rotate: '-180deg', transition };
const rotatedNormal = { rotate: '0deg', transition };
const rotatedRight = { rotate: '180deg', transition };
const AnimatedIcon = styled(
  posed.span({
    // entering: rotatedLeft,
    // enter: rotatedNormal,
    // enteringNext: rotatedLeft,
    // enterNext: rotatedNormal,
    // exitNext: rotatedRight,
    // enteringPrevious: rotatedLeft,
    // enterPrevious: { ...rotatedNormal, delay: 300 },
    // exitPrevious: rotatedRight,
  })
)`
  display: inline-block;
`;

const transparent = { opacity: 0, transition };
const opaque = { opacity: 1, x: 0, transition };
const slightlyLeft = { ...transparent, x: -20 };
const Fade = styled(
  posed.span({
    entering: below,
    enter: { ...normal, delay: 50 },
    enteringNext: transparent,
    enterNext: opaque,
    // enterNext: { ...opaque, delay: 400 },
    // exitNext: slightlyLeft,
    // enteringPrevious: slightlyLeft,
    // enterPrevious: { ...opaque, delay: 600 },
    // exitPrevious: { ...transparent, delay: 250, transition: { duration: 100 } },
    exitPrevious: transparent,
  })
)`
  display: inline-block;
`;

const AnimatedNavItem = ({ to, title, iconLeft, iconRight, children }) => (
  <NavItem to={to} title={title}>
    <AnimatedNavText>
      {iconLeft && (
        <AnimatedIcon>
          <Icon icon={iconLeft} />
        </AnimatedIcon>
      )}
      {children}
      {iconRight && (
        <AnimatedIcon>
          <Icon icon={iconRight} />
        </AnimatedIcon>
      )}
    </AnimatedNavText>
  </NavItem>
);

export default AnimatedNavItem;

export const FadingIcon = props => (
  <Fade>
    <Icon {...props} />
  </Fade>
);
