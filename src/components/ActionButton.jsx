import React from 'react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import PropTypes from 'prop-types';
import StyledActionButton from './styled/StyledActionButton';

function ActionButton({ type, count, onButtonClicked }) {
  return (
    <StyledActionButton className="action-btn" type="button" onClick={onButtonClicked}>
      {type === 'up' ? <MdThumbUp /> : <MdThumbDown />}
      <p>{count}</p>
    </StyledActionButton>
  );
}

ActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default ActionButton;
