import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { detailProp } from '../../utils/propHelper';

function ThreadDetailContent({ detail }) {
  const { body } = detail;
  return (
    <div className="thread-content_body">
      {parse(body)}
    </div>
  );
}

ThreadDetailContent.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailContent;
