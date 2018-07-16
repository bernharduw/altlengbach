import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'react-emotion';

// import Header from './header';
import './layout.css';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display:700');
body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}
`;

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Haus im Wienerwald zu verkaufen',
            },
            { name: 'keywords', content: 'Immobilie, Haus, Verkauf' },
          ]}
        />
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
