import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Wrapper } from './components/containers/Wrapper';
import { Container } from './components/containers/Container';
import { Main } from './components/containers/Main';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { News } from './pages/News';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/news/:id" element={<News />} />
          </Routes>
        </Main>
      </Container>
    </Wrapper>
  );
}

export default App;
