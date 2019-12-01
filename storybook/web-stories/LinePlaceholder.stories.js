import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import LinePlaceholder from '../LinePlaceholder';
import theme from "../_Theme";

export default {
  title: 'LinePlaceholder',
  component: LinePlaceholder,
};

const Template = ({...props}) => {
  return <ThemeProvider theme={theme}>
      <LinePlaceholder {...props} />
  </ThemeProvider>
};

export const Default = Template.bind({});
Default.args = {
    width: 100,
    height: 10
};
