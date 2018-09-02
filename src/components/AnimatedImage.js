import React from 'react';
import posed from 'react-pose';
import FluidImage from './FluidImage';

const transition = { x: { ease: 'easeOut' } };
const transparent = { opacity: 0, transition };
const opaque = { opacity: 1, transition };
const right = { x: '100%', transition };
const center = { x: '0%', transition };
const left = { x: '-100%', transition };

const AnimatedImageWrapper = posed.div({
  entering: transparent,
  enter: opaque,
  enteringNext: right,
  enterNext: center,
  exitNext: left,
  enteringPrevious: left,
  enterPrevious: center,
  exitPrevious: right,
});

const AnimatedImageSection = props => (
  <AnimatedImageWrapper className="gatsby-image-outer-wrapper">
    <FluidImage {...props} />
  </AnimatedImageWrapper>
);

export default AnimatedImageSection;
