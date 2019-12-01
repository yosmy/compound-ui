import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import theme from '../_Theme';
import icons from '../_Icons';
import {IconButton} from '../Button';

export default {
  title: 'IconButton',
  component: IconButton,
};

const Template = ({...props}) => {
  return <ThemeProvider theme={theme}>
    <IconButton
        onClick={() => {}}
        {...props}
    >
      <icons.objects.help />
    </IconButton>
  </ThemeProvider>
};

export const Default = Template.bind({});

