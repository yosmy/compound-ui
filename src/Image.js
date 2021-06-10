import React, {useContext} from "react";
import {ThemeContext} from "@yosmy/style";
import {Image as Spec} from "@yosmy/primitive-ui-spec";
import {Image as BaseImage} from "@yosmy/primitive-ui";
import {compileMargin} from "./Container";

const Image = ({
    margin,
    ...props
}) => {
    const theme = useContext(ThemeContext);

    return <BaseImage
        margin={compileMargin(theme.spacing, margin)}
        {...props}
    />
};

Image.propTypes = Spec.Props;

export default Image;