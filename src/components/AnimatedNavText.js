import posed from 'react-pose';
import styled from 'react-emotion';

const transition = { x: { ease: 'easeOut' }, y: { ease: 'easeOut' } };

const left = {
  x: '-40vw',
  opacity: 0,
  transition,
};
const normal = {
  x: 0,
  y: 0,
  opacity: 1,
  transition,
};
const right = {
  y: '100%',
  opacity: 0,
  transition,
};
const AnimatedNavText = styled(
  posed.span({
    enteringNext: right,
    enterNext: normal,
    exitNext: left,
    enteringPrevious: left,
    enterPrevious: normal,
    exitPrevious: right,
    enteringLevelUp: left,
    enterLevelUp: normal,
    exitLevelUp: right,
    enteringLevelDown: left,
    enterLevelDown: normal,
    exitLevelDown: right,
  })
)`
  display: inline-block;
`;

export default AnimatedNavText;
