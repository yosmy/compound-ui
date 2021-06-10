import React, {useContext} from "react";
import {ThemeContext} from "@yosmy/style";
import {Progress as Spec} from "@yosmy/primitive-ui-spec";
import {Progress as BaseProgress} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Progress = ({
    align, margin,
    ...props
}) => {
    const theme = useContext(ThemeContext);

    return <BaseProgress
        align={align}
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

Progress.propTypes = Spec.Props;

export default Progress;