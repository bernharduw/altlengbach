import styled from 'react-emotion';

const Article = styled('article')`
  flex: 1;
  overflow: scroll; // To enable z-index for the plans.

  @media (orientation: landscape) {
    display: flex;
    align-items: stretch;
  }
`;
export default Article;
