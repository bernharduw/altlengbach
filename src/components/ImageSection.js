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
  .gatsby-image-wrapper > img:first-of-type {
    filter: blur(1vmax);
    transform: scale(1.05);
  }

  @media (orientation: landscape) {
    overflow: hidden;
    height: 100%;

    // Let the spacer occupy 100% height.
    .gatsby-image-wrapper div:first-child {
      height: 100%;
      padding-bottom: 0 !important;
    }
  }

  // Remove the margin set by the defaultStyle.
  .gatsby-image-wrapper img {
    margin-bottom: 0;
  }
`;

export default ImageSection;
