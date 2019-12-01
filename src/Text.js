import React from "react";
import {withTheme} from "@yosmy/style";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Text as BaseText} from "@yosmy/primitive-ui";
import {compileMargin, compilePadding} from "./Container";
import LinePlaceholder from "./LinePlaceholder";

const Props = {
    margin: ContainerSpec.MarginProp,
};

const Text = ({
    theme, margin, padding, border, color, background, width, contrast, children, ...props
}) => {
    margin = compileMargin(theme.spacing, {
        ...ContainerSpec.normalizeMargin(theme.text.margin),
        ...ContainerSpec.normalizeMargin(margin)
    });

    padding = compilePadding(theme.spacing, {
        ...ContainerSpec.normalizePadding(theme.text.padding),
        ...ContainerSpec.normalizePadding(padding)
    });
    
    if (contrast) {
        theme.text.color = theme.text.contrast.color;
    }

    // Lazy
    if (children === null) {
        return <LinePlaceholder
            margin={margin}
            {...props}
        />;
    }

    border = border || theme.text.border;

    color = color || theme.text.color;

    background = background || theme.text.background;

    width = width || theme.text.width;

    return <BaseText
        margin={margin}
        padding={padding}
        border={border}
        color={color}
        background={background}
        width={width}
        size={theme.text.size}
        {...props}
    >
        {children}
    </BaseText>
};

Text.propTypes = Props;

const TextWithTheme = withTheme(Text);

const BannerText = ({
    theme, children, ...props
}) => {
    theme = {
        ...theme,
        text: {
            ...theme.banner_text
        }
    };

    return <Text
        theme={theme}
        {...props}
    >
        {children}
    </Text>
};

BannerText.propTypes = Props;

const BannerTextWithTheme = withTheme(BannerText);

const TitleText = ({
    theme, children, ...props
}) => {
    theme = {
        ...theme,
        text: {
            ...theme.title_text
        }
    };

    return <Text
        theme={theme}
        {...props}
    >
        {children}
    </Text>
};

TitleText.propTypes = Props;

const TitleTextWithTheme = withTheme(TitleText);

const SecondaryText = ({
    theme, children, ...props
}) => {
    theme = {
        ...theme,
        text: {
            ...theme.secondary_text
        }
    };

    return <Text
        theme={theme}
        {...props}
    >
        {children}
    </Text>
};

SecondaryText.propTypes = Props;

const SecondaryTextWithTheme = withTheme(SecondaryText);

export {
    TextWithTheme as Text,
    BannerTextWithTheme as BannerText,
    TitleTextWithTheme as TitleText,
    SecondaryTextWithTheme as SecondaryText,
};