import React from 'react';
import { graphql } from 'gatsby';

import Image from 'gatsby-image';

const FluidImage = ({
  file: { name, childImageSharp: { fluid } = {} } = {},
  title,
  alt,
}) => <Image title={title} alt={alt} name={name} fluid={fluid} />;

export default FluidImage;

export const query = graphql`
  fragment ImageFragment on File {
    name
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }

  fragment PlanFragment on File {
    name
    childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`;
