import React from 'react';
import FluidImage from '../components/FluidImage';

const ImageSection = ({ file, title, alt, children }) => (
  <article>
    <main>{children}</main>
    <aside>
      <FluidImage title={title} alt={alt} file={file} />
    </aside>
  </article>
);

export default ImageSection;
