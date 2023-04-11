import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';
import CounterPage from './components/pages/CounterPage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import NotFoundPage from './components/pages/NotFoundPage';
import PostsPage from './components/pages/PostsPage';
import SearchPage from './components/pages/SearchPage';
import NavigationBar from './components/ui/NavigationBar';
import Loader from './components/HOC/Loader';
import SignUpPage from './components/pages/SignUpPage';

function App(): JSX.Element {
  const user = { status: 'empty' };
  return (
    <Container>
      <Loader>
        <>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route element={<PrivateRoute isAllowed={user.status === 'empty'} />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
            <Route
              element={<PrivateRoute isAllowed={user.status === 'empty'} redirectPath="/login" />}
            >
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      </Loader>
    </Container>
  );
}

export default App;
