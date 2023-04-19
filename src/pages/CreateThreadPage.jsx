import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createThread } from '../states/thread/action';
import ThreadInput from '../components/create/ThreadInput';

function CreateThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = ({ title, body, category }) => {
    dispatch(createThread({ title, body, category }));
    navigate('/');
  };

  return (
    <ThreadInput onCreate={onCreate} />
  );
}

export default CreateThreadPage;
