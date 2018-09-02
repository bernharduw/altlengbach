import React from 'react';
import posed from 'react-pose';
import FluidImage from '../../components/FluidImage';

const transition = { ease: 'easeOut' };
const right = { x: '100%', transition };
const center = { x: '0%', transition };
const left = { x: '-100%', transition };

const AnimatedImageWrapper = posed.div({
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
