import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  NavBar,
  NavItem,
} from '../components/MainLayout/MainLayout';
import AnimatedTextSection, {
  H1,
  P,
} from '../components/MainLayout/AnimatedTextSection';
import ImageSection from '../components/ImageSection';
import AnimatedImage from '../components/MainLayout/AnimatedImage';
import Icon from '../components/Icon';
import { kueche, index } from '../pagesByName';

const IndexPage = ({ data, next = kueche, current = index }) => (
  <Layout>
    <Article>
      <AnimatedTextSection isHome>
        <H1>Ein charmanter Landsitz im Wienerwald</H1>
        <P>
          Zum Verkauf kommt ein charmantes, geräumiges Landhaus in Grünruhelage
          mit unverbaubarem Blick in der Wienerwald-Gemeinde Altlengbach.{' '}
        </P>
        <P>
          Auf einer Grundstücksfläche von insgesamt 4.388m2 bietet ein großes
          Haus mit über 200m2 Wohnfläche, einem großem Garten und einem eigenen
          Waldstück viel Platz für eine große Familie.
        </P>
        {/* <Button to={next.path}>Tour durchs Haus starten</Button> */}
      </AnimatedTextSection>

      <ImageSection>
        <Link to={next.path}>
          <AnimatedImage
            title={current.title}
            alt="Haus von außen"
            file={data.image}
          />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
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
