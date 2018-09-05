import styled from 'react-emotion';

const ImageSection = styled('aside')`
  flex: 1;
  width: 100%;

  // Make the gatsby image 100% of the surrounding content.
  .gatsby-image-wrapper,
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  // Blur the inline placeholder a bit more than the default.
  .gatsby-image-wrapper img:first-of-type {
    filter: blur(4px);
  }

  @media (orientation: landscape) {
    overflow: hidden;
    height: 100%;

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
