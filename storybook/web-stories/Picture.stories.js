import React from 'react';
import Picture from '../Picture';

export default {
    title: 'Picture',
    component: Picture,
    argTypes: {
        source: {
            table: {
                disable:true
            }
        },
        resize: {
            table: {
                disable:true
            }
        },
        onClick: {
            table: {
                disable:true
            }
        }
    }
};

const Template = ({...props}) => {
    const common = {
        source: "https://www.publicdomainpictures.net/pictures/130000/nahled/red-box-background.jpg",
        size: "md"
    };

    return <Picture
        {...common}
        {...props}
    />
};

export const Default = Template.bind({});
