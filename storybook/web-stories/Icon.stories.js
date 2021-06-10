import React from 'react';
import Icon from '../Icon';
import icons from "../_Icons";

export default {
  title: 'Icon',
  component: Icon,
};

const Template = ({...props}) => {
  return <Icon
      data={icons.actions.expand}
      {...props}
  />
};

export const Default = Template.bind({});
