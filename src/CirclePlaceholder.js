import React, {useContext} from "react";
import {ThemeContext} from "@yosmy/style";
import {CirclePlaceholder as Spec} from "@yosmy/primitive-ui-spec";
import {CirclePlaceholder as BaseCirclePlaceholder} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const CirclePlaceholder = ({
    margin,
    ...props
}) => {
    const theme = useContext(ThemeContext);

    return <BaseCirclePlaceholder
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

CirclePlaceholder.propTypes = Spec.Props;

export default CirclePlaceholder;