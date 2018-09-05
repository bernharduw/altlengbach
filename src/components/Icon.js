import React from 'react';
import { css } from 'emotion';

const icons = {
  up: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
  right: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  ),
  down: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  ),
  left: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  ),
  home: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
  plans: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
    </svg>
  ),
  contact: ({ className, hostRef }) => (
    <svg className={className} ref={hostRef} viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
};

const iconStyle = css`
  fill: currentColor;
  width: 1em;
  height: 1em;
  vertical-align: middle;
`;

export default ({ icon, hostRef }) => {
  const SelectedIcon = icons[icon];
  if (!SelectedIcon) return null;
  return <SelectedIcon className={iconStyle} hostRef={hostRef} />;
};
