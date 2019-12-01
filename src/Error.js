import React from "react";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {withTheme} from "@yosmy/style";
import {Text} from "./Text";

const Error = ({
    theme, children, ...props
}) => {
    theme = {
        ...theme,
        text: {
            ...theme.text,
            ...theme.error,
            border: {
                ...theme.button.border,
                ...theme.error.border,
            }
        },
    };

    return <Text
        theme={theme}
        {...props} // key prop
    >
        {children}
    </Text>
};

Error.propTypes = {
    margin: ContainerSpec.MarginProp,
};

export default withTheme(Error);