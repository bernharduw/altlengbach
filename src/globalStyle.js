import { injectGlobal } from 'react-emotion';

import './defaultStyle';

// Style overrides to defaultStyle

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,600|Playfair+Display:700');

@media (max-width: 768px) {
  html {
    font-size: 100%;
  }
}

@media (min-width: 1281px) {
  html {
    font-size: 150%;
  }
}

body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: darkolivegreen;
}

a {
  color: darkolivegreen;
}

// Make the actual content 100% height.
// Better than 100vh because on mobile it adds the browser's navigation bar.
html, 
body,
#___gatsby,
#___gatsby > div, // reach-router FocusHandler
body
 {
  height: 100%;
}
`;
