import React from 'react';
import CirclePlaceholder from '../CirclePlaceholder';

export default {
  title: 'CirclePlaceholder',
  component: CirclePlaceholder,
};

const Template = ({...props}) => {
  return <CirclePlaceholder {...props} />
};

export const Default = Template.bind({});
Default.args = {
    size: 20
};
