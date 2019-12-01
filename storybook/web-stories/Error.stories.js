import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import Error from '../Error';
import theme from "../_Theme";

export default {
  title: 'Error',
  component: Error,
};

const Template = ({...props}) => {
  return <ThemeProvider theme={theme}>
      <Error {...props}>
          Error
      </Error>
  </ThemeProvider>
};

export const Default = Template.bind({});
