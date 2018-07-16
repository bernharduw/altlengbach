import React from 'react';
import FluidImage from '../components/FluidImage';
import styled from 'react-emotion';

const Article = styled('article')`
  display: flex;
  align-items: center;
`;

const Main = styled('main')`
  flex: 0 38.1966%;
  padding: 16px;
`;

const Aside = styled('aside')`
  flex: 1;
  width: 100%;

  .gatsby-image-wrapper div:first-child {
    padding-bottom: 100vh !important;
  }
`;

const ImageSection = ({ file, title, alt, children }) => (
  <Article>
    <Main>{children}</Main>
    <Aside>
      <FluidImage title={title} alt={alt} file={file} />
    </Aside>
  </Article>
);

export default ImageSection;
