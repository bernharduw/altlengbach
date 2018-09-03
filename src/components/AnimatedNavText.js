import posed from 'react-pose';
import styled from 'react-emotion';

const transition = {
  x: { ease: 'easeOut', duration: 700 },
  y: { ease: 'easeOut' },
};

const left = {
  // x: 'calc(100% - 61.81vw + 72px)',
  x: '-61.81vw',
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
    enteringNext: below,
    enterNext: normal,
    exitNext: {
      ...left,
      transition: {
        ...transition,
        opacity: { ...transition.opacity, delay: 1000 },
        x: { ...transition.x, delay: 100 },
      },
    },
    enteringPrevious: left,
    enterPrevious: normal,
    exitPrevious: below,
    enteringLevelUp: left,
    enterLevelUp: normal,
    exitLevelUp: below,
    enteringLevelDown: left,
    enterLevelDown: normal,
    exitLevelDown: below,
  })
)`
  display: inline-block;
`;

export default AnimatedNavText;
