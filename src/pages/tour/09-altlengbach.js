import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../../components/Layout';
import FluidImage from '../../components/FluidImage';
import Icon from '../../components/Icon';
import { garten, altlengbach, summary } from '../../pagesByName';

const Altlengbach = ({
  data,
  previous = garten,
  current = altlengbach,
  next = summary,
}) => (
  <Layout>
    <Article>
      <TextSection>
        <h1>Die Umgebung</h1>
        <p>
          Der Ortskern von Altlengbach befindet sich in Gehweite vom Landhaus.
          Zwei Kindergärten, eine Volksschule und eine Bücherei direkt im Ort
          sowie eine Mittelschule und eine Musikschule in der unmittelbaren Nähe
          sorgen für die{' '}
          <a href="http://www.altlengbach.gv.at/Leben/Kinder_Betreuung/Allgemeine_Information">
            Bildung
          </a>.
        </p>
        <p>
          Zwei praktische Ärte und eine große Apotheke befinden sich direkt im
          Ort, außerdem ein Zahnarzt und ein Tierarzt.
        </p>
        <p>
          Auch kulinarisch kommen Sie voll auf Ihre Kosten: Gemütliche
          Gasthäuser, Cafés und Heurigen in der Umgebung sowie zwei
          Hotelrestaurants laden zu genussvollen Stunden ein.
        </p>
        <p>
          Die Autobahnauffahrt A1 Altlengbach ist 5 Minuten entfernt, bis St.
          Pölten benötigt man 15 Minuten mit dem Auto, bis zur Stadtgrenze von
          Wien 20 Minuten. Der Bahnhof Eichgraben-Altlengbach ist mit dem Bus
          oder per PKW in 5 Minuten erreichbar.
        </p>
        <a href="http://www.altlengbach.gv.at/">Zur Website von Altlengbach</a>
      </TextSection>

      <ImageSection>
        <Link to={next.path}>
          <FluidImage
            title={current.title}
            alt={current.name}
            file={data.image}
          />
        </Link>
      </ImageSection>
    </Article>

    <NavBar>
      <NavItem to={previous.path} title={previous.name}>
        <Icon icon="left" />
      </NavItem>
      <NavItem to={next.path} title={next.title}>
        {next.name} <Icon icon="right" />
      </NavItem>
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
