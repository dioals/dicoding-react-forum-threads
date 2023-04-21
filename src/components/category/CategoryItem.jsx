import React from 'react';
import PropTypes from 'prop-types';
import { CategoryItemSelected, CategoryItemNormal } from '../styled/CategoryItem';

function CategoryItem({
  category, onSelect, unSelect, selected,
}) {
  return (
    (category === selected ? (
      <CategoryItemSelected
        onClick={unSelect}
        value={category}
      >
        {`#${category}`}
      </CategoryItemSelected>
    ) : (
      <CategoryItemNormal
        onClick={onSelect}
        value={category}
      >
        {`#${category}`}
      </CategoryItemNormal>
    )));
}

CategoryItem.propTypes = {
  selected: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  unSelect: PropTypes.func.isRequired,
};

export default CategoryItem;
