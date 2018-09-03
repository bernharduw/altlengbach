import React from 'react';
import TransitionContainer from './src/components/TransitionContainer';

export const wrapPageElement = ({ element, props }) => (
  <TransitionContainer location={props.location}>{element}</TransitionContainer>
);
