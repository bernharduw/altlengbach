import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../components/Layout';
import FluidImage from '../components/FluidImage';
import Icon from '../components/Icon';

const nextURL = '/tour/01-kueche';

const IndexPage = ({ data }) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Ein charmanter Landsitz im Wienerwald</h1>
        <p>
          In Altlengbach, an einer ruhigen Nebenstraße, steht ein Haus zum
          Verkauf.
        </p>
      </TextSection>

      <ImageSection>
        <Link to={nextURL}>
          <FluidImage
            title="Außenansicht"
            alt="Haus von außen"
            file={data.image}
          />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem />
      <NavItem to={nextURL}>
        Tour starten <Icon icon="right" />
      </NavItem>
    </NavBar>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    image: file(name: { eq: "haus-frontal-fern-2" }) {
      ...ImageFragment
    }
  }
`;
