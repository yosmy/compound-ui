import React from "react";
import {withTheme} from "@yosmy/style";

const Icon = ({
    theme, data, size, color, contrast, ...props
}) => {
    const Icon = data;

    if (contrast) {
        theme.icon.color = theme.icon.contrast.color;
    }

    return <Icon
        size={size || theme.icon.size}
        color={color || theme.icon.color}
        {...props}
    />
};

const IconWithTheme = withTheme(Icon);

export {
    IconWithTheme as Icon,
};