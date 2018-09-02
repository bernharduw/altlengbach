import React from 'react';
import posed from 'react-pose';
import TextSection from './TextSection';

const transition = { x: { ease: 'easeOut' } };

const parentConfig = {
  staggerChildren: 50,
  transition,
};

const AnimatedTextWrapper = posed.div({
  enteringNext: parentConfig,
  enterNext: { ...parentConfig, delayChildren: 200 },
  exitNext: parentConfig,
  enteringPrevious: parentConfig,
  enterPrevious: { ...parentConfig, delayChildren: 200 },
  exitPrevious: parentConfig,
  entering: parentConfig,
  enter: parentConfig,
});

const AnimatedTextSection = ({ children, ...props }) => (
  <TextSection {...props}>
    <AnimatedTextWrapper>{children}</AnimatedTextWrapper>
  </TextSection>
);
export default AnimatedTextSection;

const left = {
  x: -50,
  opacity: 0,
  transition,
};
const normal = {
  x: 0,
  opacity: 1,
  transition,
};
// const right = {
//   x: 50,
//   opacity: 0,
//   transition,
// };
const childConfig = {
  entering: left,
  enter: normal,
  enteringNext: left, // right,
  enterNext: normal,
  exitNext: left,
  enteringPrevious: left,
  enterPrevious: normal,
  exitPrevious: left, // right,
  enteringLeft: left,
  enterLeft: normal,
  exitLeft: left, // right,
  enteringRight: left,
  enterRight: normal,
  exitRight: left, // right,
  enteringLevelUp: left,
  enterLevelUp: normal,
  exitLevelUp: left, // right,
  enteringLevelDown: left,
  enterLevelDown: normal,
  exitLevelDown: left, // right,
};

export const H1 = posed.h1(childConfig);
export const P = posed.p(childConfig);
export const Ul = posed.ul(childConfig);
export const Li = posed.li(childConfig);
