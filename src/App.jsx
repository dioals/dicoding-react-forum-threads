/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';
import CreateThreadPage from './pages/CreateThreadPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (

    <div className="app-container">
      <header>
        <Header authUser={authUser} />
        <Loading />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thread/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/create" element={<CreateThreadPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <div>
        <Navigation signout={onSignOut} />
      </div>
    </div>

  );
}

export default App;
