import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import CirclePlaceholder from '../CirclePlaceholder';
import theme from "../_Theme";

export default {
  title: 'CirclePlaceholder',
  component: CirclePlaceholder,
};

const Template = ({...props}) => {
  return <ThemeProvider theme={theme}>
      <CirclePlaceholder {...props} />
  </ThemeProvider>
};

export const Default = Template.bind({});
Default.args = {
    size: 20
};
