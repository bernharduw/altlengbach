import React from 'react';
import posed from 'react-pose';
import FluidImage from './FluidImage';

const transition = {
  x: { ease: 'easeOut', duration: 500 },
  scale: { delay: 250, duration: 700 },
};
const transparent = { opacity: 0, scale: 1.03, transition };
const opaque = { opacity: 1, scale: 1, transition };
const right = { x: '100%', transition };
const center = { x: '0%', scale: 1, transition };
const left = { x: '-100%', transition };

const AnimatedImageWrapper = posed.div({
  entering: transparent,
  enter: opaque,
  enteringNext: { ...right, scale: 1.03 },
  enterNext: center,
  exitNext: left,
  enteringPrevious: { ...left, scale: 1.03 },
  enterPrevious: center,
  exitPrevious: right,
  enteringLeft: transparent,
  enterLeft: { ...opaque, delay: 200 },
  exitLeft: { ...transparent, delay: 200 },
  enteringRight: transparent,
  enterRight: { ...opaque, delay: 200 },
  exitRight: { ...transparent, delay: 200 },
});

const AnimatedImageSection = props => (
  <AnimatedImageWrapper className="gatsby-image-outer-wrapper">
    <FluidImage {...props} />
  </AnimatedImageWrapper>
);

export default AnimatedImageSection;
