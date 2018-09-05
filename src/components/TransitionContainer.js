import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import DirectionManager from './DirectionManager';
import styled from 'react-emotion';

const RoutesContainer = styled(posed.div())`
  height: 100%;
`;

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
