import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function ThreadInput({ onCreate }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setValue] = React.useState('');

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  return (
    <div className="create-thread-page">
      <h2>Create new thread</h2>
      <form className="create-thread-input">
        <input type="text" placeholder="Title" value={title} onChange={onTitleChange} />
        <input type="text" placeholder="Category" value={category} onChange={onCategoryChange} />
        <div
          className="input-body"
          contentEditable
          onInput={onChange}
          data-testid="input-body"
        />
        <button type="button" onClick={() => onCreate({ title, category, body })}>Create</button>
      </form>
    </div>
  );
}

ThreadInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ThreadInput;
