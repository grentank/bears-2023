import React from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import PostsPage from './components/pages/PostsPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </Container>
  );
}

export default App;
