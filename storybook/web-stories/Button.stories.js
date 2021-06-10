import React from 'react';
import Text from '../Text';
import Button from '../Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = ({...props}) => {
  return <Button
      {...props}
      onClick={(value) => {
        console.log(value);
      }}
  >
    <Text>Button</Text>
  </Button>
};

export const Default = Template.bind({});
Default.args = {
  type: "primary"
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  type: "primary",
  progress: true
};

export const AsUpload = Template.bind({});
AsUpload.args = {
  upload: true
};
