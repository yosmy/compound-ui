import React, {useContext} from "react";
import PropTypes from "prop-types";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {Button as BaseButton, Progress} from "@yosmy/primitive-ui";
import {ThemeContext} from "@yosmy/style";
import {compileMargin, compilePadding} from "./Container";

const Button = ({
    margin, progress, onClick,
    type, contrast,
    children, ...props
}) => {
    const theme = useContext(ThemeContext);

    let preparedTheme = prepareTheme(
        theme,
        {
            type: type,
            contrast: contrast
        }
    );

    if (progress) {
        children = putProgress(preparedTheme, children);
    }

    children = addColor(children, preparedTheme.button.color);

    children = addMargin(children);

    return <BaseButton
        flow="row"
        margin={compileMargin(preparedTheme.spacing, {
            ...preparedTheme.button.margin,
            ...ContainerSpec.normalizeMargin(margin)
        })}
        padding={compilePadding(preparedTheme.spacing, preparedTheme.button.padding)}
        border={preparedTheme.button.border}
        background={preparedTheme.button.background}
        width={preparedTheme.button.width}
        height={preparedTheme.button.height}
        onClick={(value) => {
            // It is still an onClick function but do nothing

            if (progress) {
                return;
            }

            onClick(value);
        }}
        {...props}
    >
        {children}
    </BaseButton>
};

export const propTypes = {
    margin: ContainerSpec.MarginProp,
    progress: PropTypes.bool,
    onClick: ContainerSpec.OnClickProp.isRequired,

    type: PropTypes.oneOf(["primary", "secondary", "tertiary", "icon"]),
    contrast: PropTypes.bool,
}

export const defaultProps = {
    type: "primary",
    contrast: false
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

const prepareTheme = (theme, {type, contrast}) => {
    let preparedTheme = {};

    switch (type) {
        case "primary":
            preparedTheme = {
                ...theme,
                button: {
                    ...theme.button,
                    ...theme.button.primary_type
                }
            };

            break;
        case "secondary":
            preparedTheme = {
                ...theme,
                button: {
                    ...theme.button,
                    ...theme.button.secondary_type
                }
            };

            break;
        case "tertiary":
            preparedTheme = {
                ...theme,
                button: {
                    ...theme.button,
                    ...theme.button.tertiary_type
                }
            };

            break;
        case "icon":
            preparedTheme = {
                ...theme,
                button: {
                    ...theme.button,
                    ...theme.button.icon_type
                }
            };

            break;
        default:
            throw new Error(`Unknown type ${type}.`)
    }

    if (contrast) {
        preparedTheme = {
            ...preparedTheme,
            button: {
                ...preparedTheme.button,
                ...preparedTheme.button.is_contrast
            }
        };
    }

    return preparedTheme;
};

const isIcon = (elem) => {
    return !elem.props.children;
};

const putProgress = (theme, children) => {
    const count = React.Children.count(children);

    const progress = <Progress
        color={theme.button.color}
    />;

    switch (count) {
        case 1:
            if (isIcon(children)) {
                children = progress;
            } else {
                children = [
                    children,
                    <progress.type
                        {...progress.props}
                        style={{
                            position: "absolute",
                            top: theme.button.padding && theme.button.progress && theme.spacing(theme.button.padding.top) + theme.button.progress.top,
                            right: theme.spacing(2),
                        }}
                    />
                ]
            }

            break;
        case 2:
            children = React.Children.map(children, (child) => {
                if (isIcon(child)) {
                    return progress;
                }

                return child;
            })

            break;
        default:
            throw new Error("Too many components inside a button");
    }

    return children;
};

const addColor = (children, color) => {
    return React.Children.map(children, (child, i) => {
        return <child.type
            key={i}
            color={color}
            {...child.props}
        />
    });
}

const addMargin = (children) => {
    const count = React.Children.count(children);

    if (count !== 2) {
        return children;
    }

    return React.Children.map(children, (child, i) => {
        if (isIcon(child)) {
            return child;
        }

        return <child.type
            key={i}
            margin={{
                left: i === 1 ? 1 : 0,
                right: i === 0 ? 1 : 0,
            }}
            {...child.props}
        />
    });
}

export default Button;
