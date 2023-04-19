import React from 'react';
import ActionButton from '../components/action/ActionButton';

export default {
  title: 'Example/ActionButton',
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const TypeLike = Template.bind({});
TypeLike.args = {
  id: 'comment-fJ579RDuAsZdB4ER',
  count: 1,
  type: 'like',
};

export const TypeDisLike = Template.bind({});
TypeDisLike.args = {
  id: 'comment-fJ579RDuAsZdB4ER',
  count: 1,
  type: 'dislike',
};
