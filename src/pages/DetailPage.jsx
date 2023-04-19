import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail } from '../states/threadDetail/actions';
import ThreadDetailHeader from '../components/threadDetail/ThreadDetailHeader';
import ThreadDetailContent from '../components/threadDetail/ThreadDetailContent';
import ThreadDetailFooter from '../components/threadDetail/ThreadDetailFooter';
import ThreadDetailComment from '../components/threadDetail/ThreadDetailComment';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <section className="detail-page">
      <ThreadDetailHeader detail={threadDetail} />
      <ThreadDetailContent detail={threadDetail} />
      <ThreadDetailFooter detail={threadDetail} />
      <ThreadDetailComment detail={threadDetail} />
    </section>
  );
}

export default DetailPage;
