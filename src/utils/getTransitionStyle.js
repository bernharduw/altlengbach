const getTransitionStyles = timeout => {
  return {
    entering: {
      transform: 'translateX(50vw)',
      opacity: 0,
    },
    entered: {
      transition: `all ${timeout}ms ease-out`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${timeout}ms ease-out`,
      transform: 'translateX(-50vw)',
      opacity: 0,
    },
  };
};

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status];

export default getTransitionStyle;
