import posed from 'react-pose';

const transition = { ease: 'easeOut' };
const right = { x: '100vw', transition };
const center = { x: '0vw', y: '0vw', transition };
const left = { x: '-100vw', transition };
const above = { y: '100vw', transition };
const below = { y: '-100vw', transition };

const AnimatedPage = posed.div({
  enteringLeft: left,
  enterLeft: center,
  exitLeft: right,
  enteringDown: above,
  enterDown: center,
  exitDown: below,
  enteringRight: right,
  enterRight: center,
  exitRight: left,
  enteringUp: below,
  enterUp: center,
  exitUp: above,
});

export default AnimatedPage;
