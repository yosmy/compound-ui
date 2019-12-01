import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {Picture} from '../Picture';
import theme from "../_Theme";

export default {
  title: 'Picture',
  component: Picture,
};

const Template = ({...props}) => {
    const common = {
        source: "https://www.publicdomainpictures.net/pictures/130000/nahled/red-box-background.jpg",
        size: "md"
    };

    return <ThemeProvider theme={theme}>
        <Picture
            {...common}
            {...props}
        />
    </ThemeProvider>
};

export const Default = Template.bind({});

export const WithRounded = Template.bind({});
WithRounded.args = {
    rounded: true
}
