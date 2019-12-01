import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {Icon} from '../Icon';
import icons from "../_Icons";
import theme from "../_Theme";

export default {
  title: 'Icon',
  component: Icon,
};

const Template = ({...props}) => {
  return <ThemeProvider theme={theme}>
      <Icon
          data={icons.actions.expand}
          {...props}
      />
  </ThemeProvider>
};

export const Default = Template.bind({});

export const WithSize = Template.bind({});
WithSize.args = {
    size: 64
};

export const WithColor = Template.bind({});
WithColor.args = {
    color: "red"
};

export const WithBig = Template.bind({});
WithBig.args = {
    big: true
};