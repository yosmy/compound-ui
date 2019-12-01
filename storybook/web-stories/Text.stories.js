import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {Text} from '../Text';
import theme from "../_Theme";

export default {
  title: 'Text',
  component: Text,
};

const Template = ({...props}) => {
    return <ThemeProvider theme={theme}>
        <Text {...props}>Text</Text>
    </ThemeProvider>
};

export const Default = Template.bind({});

export const WithMargin = Template.bind({});
WithMargin.args = {
    margin: 10
};

