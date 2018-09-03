import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/MainLayout';
import Article from '../../components/Article';
import Text, { H1, P } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';
import AnimatedImage from '../../components/AnimatedImage';
import NavBar from '../../components/NavBar';
import NavItem from '../../components/NavItem';
import AnimatedNavItem, { FadingIcon } from '../../components/AnimatedNavItem';
import { garten, altlengbach, summary } from '../../pagesByName';

const Altlengbach = ({
  data,
  previous = garten,
  current = altlengbach,
  next = summary,
}) => (
  <Layout>
    <Helmet>
      <title>{current.title}</title>
    </Helmet>

    <Article>
      <Text>
        <H1>Die Umgebung</H1>
        <P>
          Der Ortskern von Altlengbach befindet sich in Gehweite vom Landhaus.
          Zwei Kindergärten, eine Volksschule und eine Bücherei direkt im Ort
          sowie eine Mittelschule und eine Musikschule in der unmittelbaren Nähe
          sorgen für die{' '}
          <a href="http://www.altlengbach.gv.at/Leben/Kinder_Betreuung/Allgemeine_Information">
            Bildung
          </a>
          .
        </P>
        <P>
          Zwei praktische Ärte und eine große Apotheke befinden sich direkt im
          Ort, außerdem ein Zahnarzt und ein Tierarzt.
        </P>
        <P>
          Auch kulinarisch kommen Sie voll auf Ihre Kosten: Gemütliche
          Gasthäuser, Cafés und Heurigen in der Umgebung sowie zwei
          Hotelrestaurants laden zu genussvollen Stunden ein.
        </P>
        <P>
          Die Autobahnauffahrt A1 Altlengbach ist 5 Minuten entfernt, bis St.
          Pölten benötigt man 15 Minuten mit dem Auto, bis zur Stadtgrenze von
          Wien 20 Minuten. Der Bahnhof Eichgraben-Altlengbach ist mit dem Bus
          oder per PKW in 5 Minuten erreichbar.
        </P>
        <P>
          <a href="http://www.altlengbach.gv.at/">
            Zur Website von Altlengbach
          </a>
        </P>
      </Text>

      <ImageSection>
        <AnimatedImage
          to={next.path}
          title={current.title}
          alt={current.name}
          file={data.image}
        />
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem to={previous.path} title={previous.name}>
        <FadingIcon icon="left" />
      </NavItem>
      <AnimatedNavItem to={next.path} iconRight="right" title={next.title}>
        {next.name}{' '}
      </AnimatedNavItem>
    </NavBar>
  </Layout>
);

export default Altlengbach;

export const query = graphql`
  query {
    image: file(name: { eq: "altlengbach" }) {
      ...ImageFragment
    }
  }
`;
