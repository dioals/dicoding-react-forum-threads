/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ActionButton from '../components/ActionButton';

export default {
  title: 'Example/ActionButton',
  component: ActionButton,
};

function Template(args) {
  return <ActionButton {...args} />;
}

export const UpVote = Template.bind({});
UpVote.args = {
  count: 1,
  type: 'up',
};

export const DownVote = Template.bind({});
DownVote.args = {
  count: 1,
  type: 'down',
};
