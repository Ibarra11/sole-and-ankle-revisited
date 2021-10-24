import React from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { DEVICES } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState('newest');
  console.log(DEVICES);

  return (
    <ThemeProvider theme={DEVICES}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
