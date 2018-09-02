import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../../components/PlanLayout/PlanLayout';
import Icon from '../../components/Icon';
import { plans } from '../../pagesByName';

const Keller = ({ data, back = plans }) => (
  <Layout>
    <NavBar>
      <NavItem to={back.path} title={back.name}>
        <Icon icon="up" /> Zurück
      </NavItem>
    </NavBar>

    <Article>
      <TextSection>
        <h1>Keller</h1>
        <ul>
          <li>
            <Link to="/floor-plans/dachboden">Dachboden</Link>
          </li>
          <li>
            <Link to="/floor-plans/obergeschoss">Obergeschoss</Link>
          </li>
          <li>
            <Link to="/floor-plans/erdgeschoss">Erdgeschoss</Link>
          </li>
          <li>
            <Link to="/floor-plans/keller">Keller</Link>
          </li>
          {/* <li>
            <Link to="/floor-plans/grundstueck">Grundstück</Link>
          </li> */}
        </ul>
      </TextSection>

      <ImageSection>
        <Image fixed={data.kg.childImageSharp.fixed} />
      </ImageSection>
    </Article>
  </Layout>
);

export default Keller;

export const query = graphql`
  query {
    kg: file(name: { eq: "plan-kg-simplified" }) {
      childImageSharp {
        fixed(width: 1280) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
