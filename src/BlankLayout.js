import React from "react";
import {withTheme} from "@yosmy/style";
import {Layout as LayoutSpec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Layout} from "@yosmy/primitive-ui";
import {compileMargin, compilePadding} from "./Container";

const BlankLayout = ({
    theme, flow, align, margin, padding, width,
    ...props
}) => {
    margin = compileMargin(
        theme.spacing,
        ContainerSpec.normalizeMargin(margin)
    );

    padding = compilePadding(
        theme.spacing,
        ContainerSpec.normalizePadding(padding)
    );

    return <Layout.Content
        flow={flow}
        align={align}
        margin={margin}
        padding={padding}
        width={width}
        {...props}
    />
};

BlankLayout.propTypes = LayoutSpec.Content.Props;

export default withTheme(BlankLayout);