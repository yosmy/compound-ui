import React, {useContext} from "react";
import {ThemeContext} from "@yosmy/style";
import {Text as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Text as BaseText} from "@yosmy/primitive-ui";
import {compileMargin, compilePadding} from "./Container";
import LinePlaceholder from "./LinePlaceholder";
import PropTypes from "prop-types";

const Text = ({
    width, margin,
    type, contrast,
    children, ...props
}) => {
    const theme = useContext(ThemeContext);

    let preparedTheme = prepareTheme(
        theme.text,
        {
            type: type,
            contrast: contrast
        }
    );

    margin = compileMargin(theme.spacing, {
        ...ContainerSpec.normalizeMargin(preparedTheme.margin),
        ...ContainerSpec.normalizeMargin(margin)
    });

    // Lazy
    if (children === null) {
        return <LinePlaceholder
            margin={margin}
            {...props}
        />;
    }

    return <BaseText
        width={width}
        align={preparedTheme.align}
        margin={margin}
        padding={compilePadding(theme.spacing, {
            ...ContainerSpec.normalizePadding(preparedTheme.padding),
        })}
        border={preparedTheme.border}
        color={preparedTheme.color}
        background={preparedTheme.background}
        font={preparedTheme.font}
        line={preparedTheme.line}
        tag={preparedTheme.tag}
        {...props}
    >
        {children}
    </BaseText>
};

export const propTypes = {
    ...Spec.Props,

    type: PropTypes.oneOf(["default", "banner", "title", "secondary", "warning", "error"]),
    contrast: PropTypes.bool,
};

export const defaultProps = {
    type: undefined,
    contrast: false
};

Text.propTypes = propTypes;

Text.defaultProps = defaultProps;

const prepareTheme = (theme, {type, contrast}) => {
    let preparedTheme = {};

    switch (type) {
        case "default":
        case undefined:
            break;
        case "banner":
            preparedTheme = {
                ...preparedTheme,
                ...theme.banner_type
            };

            break;
        case "title":
            preparedTheme = {
                ...preparedTheme,
                ...theme.title_type
            };

            break;
        case "secondary":
            preparedTheme = {
                ...preparedTheme,
                ...theme.secondary_type
            };

            break;
        case "warning":
            preparedTheme = {
                ...preparedTheme,
                ...theme.warning_type
            };

            break;
        case "error":
            preparedTheme = {
                ...preparedTheme,
                ...theme.error_type
            };

            break;
        default:
            throw new Error(`Unknown type ${type}.`)
    }

    if (contrast) {
        preparedTheme = {
            ...preparedTheme,
            ...theme.is_contrast
        };
    }

    return preparedTheme;
};

export default Text;
