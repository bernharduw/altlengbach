import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'react-emotion';

import Layout, {
  Article,
  TextSection,
  ImageSection,
  NavBar,
  NavItem,
} from '../../components/PlanLayout/PlanLayout';
import Icon from '../../components/Icon';
import { index } from '../../pagesByName';

const PlanContainer = styled('div')`
  position: relative;
  z-index: 1;
  margin: 100px auto;
  height: 340px;
  width: 313px;
  transform: rotateX(60deg) rotateZ(-45deg);
  transform-style: preserve-3d;
  transition: 0.3s transform ease-out;

  :hover {
    transform: rotateX(55deg) rotateZ(-45deg) translateY(-2%);
  }
  :active {
    transform: rotateX(55deg) rotateZ(-45deg) translateY(-10%);
  }
`;

const Plan = styled(Link)`
  position: absolute;
  top: 0;
  /* 
  // This would center the images to the container.
  left: 0;
  right: 0;
  text-align: center;  */
  transform: translateZ(${({ level = 0 }) => 50 * level}px);
  text-decoration: none;
  opacity: 1;
  transition: 0.3s all ease-out;

  ${PlanContainer}:hover & {
    transform: translateZ(${({ level = 0 }) => 75 * level}px);
    opacity: 0.25;
  }

  ${PlanContainer} &:hover {
    transform: translateZ(${({ level = 0 }) => 75 * level}px) translateY(4%);
    opacity: 1;
    img {
      filter: grayscale(0.5);
    }
  }

  ${PlanContainer}:active & {
    transform: translateZ(${({ level = 0 }) => 100 * level}px);
    opacity: 0.125;
  }

  ${PlanContainer} &:active {
    transform: translateZ(${({ level = 0 }) => 100 * level}px) translateY(40%);
    opacity: 1;
    img {
      filter: grayscale(0);
    }
  }

  .gatsby-image-outer-wrapper {
    line-height: 0; // Fixes the gap between image and label.
  }

  img {
    border: 2px solid darkolivegreen;
    border-bottom-width: 8px;
    filter: grayscale(1);
    transition: 0.5s all ease-out !important; // gatsby-image defines this on the element.
  }
`;

const Label = styled('div')`
  display: inline-block;
  padding: 4px 16px;
  font-weight: bold;
  background: darkolivegreen;
  color: #fff;
`;

const Plans = ({ data, back = index }) => (
  <Layout>
    <NavBar>
      <NavItem to={back.path} title={back.name}>
        <Icon icon="up" /> Zurück
      </NavItem>
    </NavBar>

    <Article>
      <TextSection>
        <h1>Pläne</h1>
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
        <PlanContainer>
          <Plan level={2} to="/floor-plans/dachboden">
            <Image fixed={data.dg.childImageSharp.fixed} />
            <Label>Dachboden</Label>
          </Plan>
          <Plan level={1} to="/floor-plans/obergeschoss">
            <Image fixed={data.og.childImageSharp.fixed} />
            <Label>Obergeschoss</Label>
          </Plan>
          <Plan level={0} to="/floor-plans/erdgeschoss">
            <Image fixed={data.eg.childImageSharp.fixed} />
            <Label>Erdgeschoss</Label>
          </Plan>
          <Plan level={-1} to="/floor-plans/keller">
            <Image fixed={data.kg.childImageSharp.fixed} />
            <Label>Keller</Label>
          </Plan>
          {/* <Plan level={-2} to="/floor-plans/grundstueck">
            <Image fixed={data.grund.childImageSharp.fixed} />
            <Label>Grundstück</Label>
          </Plan> */}
        </PlanContainer>
      </ImageSection>
    </Article>
  </Layout>
);

export default Plans;

export const query = graphql`
  query {
    dg: file(name: { eq: "plan-dg-simplified" }) {
      childImageSharp {
        fixed(width: 313) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    og: file(name: { eq: "plan-og-simplified" }) {
      childImageSharp {
        fixed(width: 313) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    eg: file(name: { eq: "plan-eg-simplified" }) {
      childImageSharp {
        fixed(width: 288) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    kg: file(name: { eq: "plan-kg-simplified" }) {
      childImageSharp {
        fixed(width: 285) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
