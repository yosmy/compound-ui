import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import theme from '../_Theme';
import icons from '../_Icons';
import {Text} from '../Text';
import {SecondaryButton} from '../Button';

export default {
  title: 'SecondaryButton',
  component: SecondaryButton,
};

export const Default = ({...props}) => {
  return <ThemeProvider theme={theme}>
    <SecondaryButton {...props}>
      <Text>Secondary button</Text>
    </SecondaryButton>
  </ThemeProvider>
}

export const WithIcon = ({...props}) => {
  return <ThemeProvider theme={theme}>
    <SecondaryButton {...props}>
      <icons.objects.help />
      <Text>Secondary button</Text>
    </SecondaryButton>
  </ThemeProvider>
}