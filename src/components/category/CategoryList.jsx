import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { asyncPopulateUserAndThread } from '../../states/shared/action';
import CategoryItem from './CategoryItem';

function CategoryList({ onCategoryChange }) {
  const [selected, setSelected] = useInput('');

  const {
    threads = [],
  } = useSelector((state) => state);

  const categoryThread = threads.map(({ category }) => category);
  const uniqueCategoryThread = [...new Set(categoryThread)];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThread());
  }, [dispatch]);

  const onSelectCategory = (e) => {
    onCategoryChange(e);
    setSelected(e);
  };

  const unSelectCategory = () => {
    onCategoryChange(' ');
    setSelected(' ');
  };
  return (
    <header>
      <p className="category-title">Popular category</p>
      <div className="categories-list">
        {
            uniqueCategoryThread.map((category, key) => (
              <CategoryItem
                // eslint-disable-next-line react/no-array-index-key
                key={key}
                category={category}
                onSelect={onSelectCategory}
                unSelect={unSelectCategory}
                selected={selected}
              />
            ))
          }
      </div>
    </header>
  );
}

CategoryList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryList;
