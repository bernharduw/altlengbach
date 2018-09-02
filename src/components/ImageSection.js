import styled from 'react-emotion';

const ImageSection = styled('aside')`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(85, 107, 49, 0.1);
  overflow: hidden;

  // Fix the gatsby image.
  .gatsby-image-wrapper,
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .gatsby-image-wrapper div:first-child {
    height: 100%;
    padding-bottom: 0 !important;
  }
`;

export default ImageSection;
