import React, {useContext} from "react";
import {ThemeContext} from "@yosmy/style";
import PropTypes from "prop-types";

const Icon = ({
    data, contrast, ...props
}) => {
    const theme = useContext(ThemeContext);

    let preparedTheme = prepareTheme(
        theme.icon,
        {
            contrast: contrast
        }
    );

    const Icon = data;

    return <Icon
        size={preparedTheme.size}
        color={preparedTheme.color}
        {...props}
    />
};

export const propTypes = {
    contrast: PropTypes.bool,
};

export const defaultProps = {
    contrast: false
};

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

const prepareTheme = (theme, {contrast}) => {
    let preparedTheme = {};

    if (contrast) {
        preparedTheme = {
            ...preparedTheme,
            ...theme.is_contrast
        };
    }

    return preparedTheme;
};

export default Icon;