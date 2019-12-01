import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {TitleText} from '../Text';
import theme from "../_Theme";

export default {
  title: 'TitleText',
  component: TitleText,
};

const Template = ({...props}) => {
    return <ThemeProvider theme={theme}>
        <TitleText {...props}>Title Text</TitleText>
    </ThemeProvider>
};

export const Default = Template.bind({});
