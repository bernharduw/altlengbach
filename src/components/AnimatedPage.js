import posed from 'react-pose';

const transition = { ease: 'easeOut' };
const right = { x: 'calc(100vw - 48px)', transition };
const center = { x: '0vw', y: '0vh', transition };
const left = { x: 'calc(-100vw + 48px)', transition };
const above = { y: 'calc(100vh - 80px)', transition };
const below = { y: 'calc(-100vh + 80px)', transition };

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
