import React from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import PostsPage from './components/pages/PostsPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import PrivateRoute from './components/HOC/PrivateRoute';
import useUserContext from './contexts/user/hooks';
import Loader from './components/HOC/Loader';

function App(): JSX.Element {
  const { user } = useUserContext();
  return (
    <Container>
      <Loader>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/posts"
              element={
                <PrivateRoute isAllowed={user.status === 'logged'}>
                  <PostsPage />
                </PrivateRoute>
              }
            />
            <Route
              element={<PrivateRoute isAllowed={user.status === 'guest'} redirectPath="/posts" />}
            >
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
          </Routes>
        </>
      </Loader>
    </Container>
  );
}

export default App;
