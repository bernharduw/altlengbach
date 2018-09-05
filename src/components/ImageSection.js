import styled from 'react-emotion';

const ImageSection = styled('aside')`
  flex: 1;
  width: 100%;

  @media (orientation: landscape) {
    overflow: hidden;
    height: 100%;

    // Fix the gatsby image.
    .gatsby-image-wrapper,
    .gatsby-image-outer-wrapper {
      height: 100%;
    }

    .gatsby-image-wrapper div:first-child {
      height: 100%;
      padding-bottom: 0 !important;
    }
  }

  // Fix the SVG background.
  .gatsby-image-wrapper img {
    background-color: #f0f1ed;
    margin-bottom: 0;
  }
`;

export default ImageSection;
