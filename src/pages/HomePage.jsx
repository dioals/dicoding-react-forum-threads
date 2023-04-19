import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/thread/ThreadsList';
import { asyncPopulateUserAndThread } from '../states/shared/action';
import useInput from '../hooks/useInput';
import CategoryList from '../components/category/CategoryList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [category, onCategoryChange] = useInput('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThread());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const filteredThreads = threadList.filter((thread) => thread.category === category);
  return (
    <section className="home-page">
      <CategoryList onCategoryChange={onCategoryChange} />
      {
        category === '' || category === ' '
          ? <ThreadsList className="thread-list" threadList={threadList} />
          : <ThreadsList className="thread-list" threadList={filteredThreads} />
      }
    </section>
  );
}

export default HomePage;
