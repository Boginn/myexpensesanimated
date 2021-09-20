import React, { useEffect } from 'react';
import initialState from './data/data';
import colours from './data/colours';
import { Footer, Content, MainWrapper } from './components';

function App() {
  const { author } = initialState;

  useEffect(() => {
    document.body.style.backgroundColor = colours.background;
  });

  return (
    <MainWrapper>
      <Content />
      <Footer author={author} />
    </MainWrapper>
  );
}

export default App;
