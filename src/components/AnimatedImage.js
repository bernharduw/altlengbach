import React from 'react';
import posed from 'react-pose';
import FluidImage from './FluidImage';

const transition = {
  x: { ease: 'easeOut', duration: 500 },
  scale: { delay: 250, duration: 700 },
};
const transparent = { opacity: 0, scale: 1.025, transition };
const opaque = { opacity: 1, scale: 1, transition };
const right = { x: '95%', scale: 1.025, transition };
const center = { x: '0%', scale: 1, transition };
const left = { x: '-95%', scale: 1.025, transition };

const AnimatedImageWrapper = posed.div({
  entering: transparent,
  enter: opaque,
  enteringNext: right,
  enterNext: center,
  exitNext: left,
  enteringPrevious: left,
  enterPrevious: center,
  exitPrevious: right,
  enteringLeft: transparent,
  enterLeft: opaque,
  enteringRight: transparent,
  enterRight: opaque,
});

const AnimatedImageSection = props => (
  <AnimatedImageWrapper className="gatsby-image-outer-wrapper">
    <FluidImage {...props} />
  </AnimatedImageWrapper>
);

export default AnimatedImageSection;
