import React from 'react';
import { css } from 'emotion';

const icons = {
  up: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
  right: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  ),
  down: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  ),
  left: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  ),
};

const iconStyle = css`
  fill: currentColor;
  width: 1em;
  height: 1em;
  vertical-align: middle;
`;

export default ({ icon }) => {
  const SelectedIcon = icons[icon];
  if (!SelectedIcon) return null;
  return <SelectedIcon className={iconStyle} />;
};
