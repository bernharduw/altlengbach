import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/MainLayout';
import Article from '../components/Article';
import Text, { H1, P } from '../components/AnimatedTextSection';
import ImageSection from '../components/ImageSection';
import AnimatedImage from '../components/AnimatedImage';
import NavBar from '../components/NavBar';
import { kueche, index } from '../pagesByName';
import AnimatedNavItem from '../components/AnimatedNavItem';

const IndexPage = ({ data, next = kueche, current = index }) => (
  <Layout>
    <Helmet>
      <title>{current.title}</title>
      <link rel="prerender" href={next.path} />
    </Helmet>

    <Article>
      <Text hideHome>
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
      </Text>

      <ImageSection>
        <AnimatedImage
          to={next.path}
          title={current.title}
          alt="Haus von außen"
          file={data.image}
        />
      </ImageSection>
    </Article>

    <NavBar>
      <AnimatedNavItem to={next.path} iconRight="right">
        Tour starten{' '}
      </AnimatedNavItem>
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
