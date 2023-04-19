import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({
  category, onSelect, unSelect, selected,
}) {
  return (
    (category === selected ? (
      <button
        type="button"
        className="category-item_selected"
        onClick={unSelect}
        value={category}
      >
        {`#${category}`}
      </button>
    ) : (
      <button
        type="button"
        className="category-item"
        onClick={onSelect}
        value={category}
      >
        {`#${category}`}
      </button>
    )));
}

CategoryItem.propTypes = {
  selected: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  unSelect: PropTypes.func.isRequired,
};

export default CategoryItem;
