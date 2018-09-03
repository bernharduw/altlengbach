import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import DirectionManager from './DirectionManager';

const RoutesContainer = posed.div();

const TransitionContainer = ({ location, children }) => {
  return (
    <DirectionManager pathname={location.pathname}>
      {({ getPoseName }) => (
        <PoseGroup
          animateOnMount
          preEnterPose={getPoseName('entering')}
          enterPose={getPoseName('enter')}
          exitPose={getPoseName('exit')}
        >
          <RoutesContainer key={location.key}>{children}</RoutesContainer>
        </PoseGroup>
      )}
    </DirectionManager>
  );
};

export default TransitionContainer;
