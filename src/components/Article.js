import styled from 'react-emotion';

const Article = styled('article')`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll; // To enable z-index for the plans.

  @media (orientation: landscape) {
    align-items: stretch;
    flex-direction: row;
  }
`;
export default Article;
