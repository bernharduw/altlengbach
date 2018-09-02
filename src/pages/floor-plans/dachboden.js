import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../../components/PlanLayout';
import Article from '../../components/Article';
import NavBar from '../../components/NavBar';
import Text, { H1 } from '../../components/AnimatedTextSection';
import ImageSection from '../../components/ImageSection';

const Dachboden = ({ data }) => (
  <Layout>
    <NavBar />

    <Article>
      <Text hideHome>
        <H1>Dachboden</H1>
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
      </Text>

      <ImageSection>
        <Image fixed={data.dg.childImageSharp.fixed} />
      </ImageSection>
    </Article>
  </Layout>
);

export default Dachboden;

export const query = graphql`
  query {
    dg: file(name: { eq: "plan-dg-simplified" }) {
      childImageSharp {
        fixed(width: 1280) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
