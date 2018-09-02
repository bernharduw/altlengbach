import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import DirectionManager from './src/components/DirectionManager';

const PageTransition = posed.div();

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component: Component } = props.pageResources;
  return (
    <DirectionManager pathname={props.location.pathname}>
      {({ getPoseName }) => (
        <PoseGroup
          preEnterPose={getPoseName('entering')}
          enterPose={getPoseName('enter')}
          exitPose={getPoseName('exit')}
        >
          <PageTransition key={props.location.key}>
            <Component {...props} />
          </PageTransition>
        </PoseGroup>
      )}
    </DirectionManager>
  );
};
