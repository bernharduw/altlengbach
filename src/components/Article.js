import styled from 'react-emotion';

const Article = styled('article')`
  flex: 1;
  overflow: scroll; // To enable z-index for the plans.
  display: flex;
  flex-direction: column-reverse;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: stretch;
  }
`;
export default Article;
