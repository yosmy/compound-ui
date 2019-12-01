import React from 'react';
import {
    AvatarProps,
    prepareFlexChildStyle,
    prepareMarginStyle,
    validateExtraProps,
} from '@yosmy/ui-spec';
import {Container, Image, Platform, withTheme} from '@yosmy/simple-ui'

class Avatar extends React.Component {
    static propTypes = AvatarProps;

    render() {
        let {
            source,
            margin,
            size, resize, rounded,
            onClick,
            style, ...props
        } = this.props;

        validateExtraProps(props, ['theme', 'children', 'replaceTheme', 'updateTheme']);

        switch (size) {
            case 'sm':
                size = 34;

                break;
            case 'md':
                size = 50;

                break;
            case 'lg':
                size = 75;

                break;
            case 'xl':
            case undefined:
                size = 150;

                break;
            default:
                throw new Error(`Invalid size "${size}"`)
        }

        const image = <Image
            source={source}
            width={size}
            height={size}
            resizeMode={resize || "cover"}
            margin={margin}
            style={{
                borderRadius: rounded
                    ? Platform.select({
                        'ios': size / 2,
                        'android': size
                    })
                    : undefined,
                ...style
            }}
            {...props}
        />;

        if (onClick) {
            return <Container
                onClick={onClick}
            >
                {image}
            </Container>;
        }

        return image;
    }
}

// class Avatar extends React.Component {
//     static propTypes = AvatarProps;
//
//     render() {
//         let {
//             theme,
//             source, text,
//             size, rounded,
//             center, margin,
//             onEdit,
//             style, children, ...props
//         } = this.props;
//
//         validateExtraProps(props, ['replaceTheme', 'updateTheme']);
//
//         source = buildSource(source);
//
//         size = buildSize(size);
//
//         rounded = buildRounded(rounded);
//
//         const onEditPress = buildOnEditPress(onEdit);
//
//         const containerStyle = buildContainerStyle(theme, center, margin, style);
//
//         return <BaseAvatar
//             source={source}
//             text={text}
//             size={size}
//             rounded={rounded}
//             onEditPress={onEditPress}
//             showEditButton={typeof onEdit !== 'undefined'}
//             containerStyle={containerStyle}
//         />;
//     }
// }

const buildSource = (source) => {
    if (typeof source === 'string') {
        source = {
            uri: source
        }
    }

    return source;
};

const buildSize = (size) => {
    // https://github.com/react-native-elements/react-native-elements/blob/next/src/avatar/Avatar.js#L21

    switch (size) {
        case 'sm':
            // 34
            return 'small';
        case 'md':
            // 50
            return 'medium';
        case 'lg':
            // 75
            return 'large';
        case 'xl':
            // 150
            return 'xlarge';
        case undefined:
            return 'xlarge';
        default:
            throw new Error(`Invalid size "${size}"`)
    }
};

const buildRounded = (rounded) => {
    return rounded;
};

const buildOnEditPress = (onEdit) => {
    return onEdit;
};

const buildContainerStyle = (theme, center, margin, style) => {
    return  {
        ...prepareFlexChildStyle({center: center}),
        ...prepareMarginStyle(margin, theme),
        ...style
    };
};

export default withTheme(Avatar);