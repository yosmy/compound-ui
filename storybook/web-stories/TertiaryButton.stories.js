import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import theme from '../_Theme';
import {Text} from '../Text';
import {TertiaryButton} from '../Button';

export default {
  title: 'TertiaryButton',
  component: TertiaryButton,
};

const Template = ({...props}) => {
  return <ThemeProvider theme={theme}>
    <TertiaryButton {...props}>
      <Text>Tertiary button</Text>
    </TertiaryButton>
  </ThemeProvider>
};

export const Default = Template.bind({});

