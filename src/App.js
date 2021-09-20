import React, { useEffect } from 'react';
import initialState from './data/data';
import colours from './data/colours';
import { Footer, Content, MainWrapper } from './components';
// import { Compon } from './Compon';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = colours.background;
    document.body.style.height = '100%';
  });
  const { author } = initialState;

  return (
    <MainWrapper>
      <Content />
      <Footer author={author} />
    </MainWrapper>
  );
}

export default App;
