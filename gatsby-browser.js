import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const PageTransition = posed.div();

const getPoseName = ({ location }, name) => {
  const direction =
    location.pathname === '/'
      ? 'Previous'
      : location.pathname === '/floor-plans/'
        ? 'Down'
        : location.pathname === '/contact'
          ? 'Left'
          : 'Next';
  return `${name}${direction}`;
};

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component: Component } = props.pageResources;
  return (
    <PoseGroup
      preEnterPose={getPoseName(props, 'entering')}
      enterPose={getPoseName(props, 'enter')}
      exitPose={getPoseName(props, 'exit')}
    >
      <PageTransition key={props.location.key}>
        <Component {...props} />
      </PageTransition>
    </PoseGroup>
  );
};
