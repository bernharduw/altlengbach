import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import '../globalStyle';
import AnimatedPage from './AnimatedPage';

const BaseLayout = styled(AnimatedPage)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden; // Prevents layout problems at small sizes.
`;

const Layout = ({ children, ...props }) => (
  <BaseLayout {...props}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,600|Playfair+Display:700"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </BaseLayout>
);

export default Layout;
