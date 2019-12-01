import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {BannerText} from '../Text';
import theme from "../_Theme";

export default {
  title: 'BannerText',
  component: BannerText,
};

const Template = ({...props}) => {
    return <ThemeProvider theme={theme}>
        <BannerText {...props}>Banner Text</BannerText>
    </ThemeProvider>
};

export const Default = Template.bind({});
