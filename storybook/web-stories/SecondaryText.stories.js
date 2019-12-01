import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {SecondaryText} from '../Text';
import theme from "../_Theme";

export default {
    title: 'SecondaryText',
    component: SecondaryText,
};

const Template = ({...props}) => {
    return <ThemeProvider theme={theme}>
        <SecondaryText {...props}>Secondary Text</SecondaryText>
    </ThemeProvider>
};

export const Default = Template.bind({});
