/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CategoryItem from '../components/category/CategoryItem';
import { CategoryItemNormal, CategoryItemSelected } from '../components/styled/CategoryItem';

export default {
  title: 'Example/CategoryItem',
  component: CategoryItem,
};

function template(isSelected) {
  return { isSelected } ? <CategoryItemSelected>General</CategoryItemSelected>
    : <CategoryItemNormal>General</CategoryItemNormal>;
}

export const selected = template.bind({});
selected.isSelected = true;

export const notSelected = template.bind({});
notSelected.isSelected = false;
