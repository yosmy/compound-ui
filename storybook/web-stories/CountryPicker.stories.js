import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import theme from '../_Theme';
import icons from '../_Icons';
import CountryPicker from '../CountryPicker';

export default {
    title: 'CountryPicker',
    component: CountryPicker,
};

const Template = ({...props}) => {
    const common = {
        ui: {
            icons: {
                actions: {
                    expand: icons.actions.expand
                }
            }
        },
        messages: {
            select: "Selecciona tu país"
        },
        width: 200,
        favorites: ['DE', 'BR', 'CA', 'CU', 'EC', 'ES', 'US', 'MX'],
        more: true,
        onSelect: (country) => {}
    };

    return <ThemeProvider theme={theme}>
        <CountryPicker {...props} {...common} />
    </ThemeProvider>
};

export const Default = Template.bind({});

