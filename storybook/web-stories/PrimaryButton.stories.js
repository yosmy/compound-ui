import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import theme from '../_Theme';
import {Text} from '../Text';
import {PrimaryButton} from '../Button';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
};

const Template = ({...props}) => {
  const common = {
    onClick: () => {
      console.log("onClick");
    }
  };

  return <ThemeProvider theme={theme}>
    <PrimaryButton
        {...common}
        {...props}
    >
      <Text>Primary button</Text>
    </PrimaryButton>
  </ThemeProvider>
};

export const Default = Template.bind({});

export const WithProgress = Template.bind({});
WithProgress.args = {
  progress: true
};


