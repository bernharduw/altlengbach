import styled from 'react-emotion';

import '../globalStyle';
import AnimatedPage from './AnimatedPage';

const Layout = styled(AnimatedPage)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; // Prevents layout problems at small sizes.
`;

export default Layout;
