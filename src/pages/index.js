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
import { kueche, index } from '../pagesByName';

const IndexPage = ({ data, next = kueche, current = index }) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Ein charmanter Landsitz im Wienerwald</h1>
        <p>
          Zum Verkauf kommt ein charmantes, geräumiges Landhaus in Grünruhelage
          mit unverbaubarem Blick in der Wienerwald-Gemeinde Altlengbach.{' '}
        </p>
        <p>
          Auf einer Grundstücksfläche von insgesamt 4.388m2 bietet ein großes
          Haus mit über 200m2 Wohnfläche, einem großem Garten und einem eigenen
          Waldstück viel Platz für eine große Familie.
        </p>
        {/* <Button to={next.path}>Tour durchs Haus starten</Button> */}
      </TextSection>

      <ImageSection>
        <Link to={next.path}>
          <FluidImage
            title={current.title}
            alt="Haus von außen"
            file={data.image}
          />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem />
      <NavItem to={next.path}>
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
