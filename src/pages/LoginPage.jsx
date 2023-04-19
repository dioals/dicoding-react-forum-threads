import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaObjectGroup } from 'react-icons/fa';
import React from 'react';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <header className="login-app-logo">
        <h1>
          <FaObjectGroup className="accent-logo" />
        </h1>
        <p>Forum Threads</p>
      </header>
      <article className="login-main">
        <h2>
          Sharing
          {' '}
          <b>knowledge</b>
          ,
          <br />
          {' '}
          one threads at a time
        </h2>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
