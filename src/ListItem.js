import React from 'react';
import {ListItemProps} from '@yosmy/ui-spec';
import {Container, Text, withTheme} from '@yosmy/simple-ui';

const ListItem = (props) => {
    let {
        align, margin, padding, divider, disabled,
        left, title, subtitle, right,
        onClick,
    } = props;

    if (typeof left === 'function') {
        const Left = left;

        left = <Left />;
    }

    if (typeof title === 'string') {
        title = <Text>
            {title}
        </Text>;
    } else if (typeof left === 'function') {
        const Title = title;

        title = <Title />;
    }

    if (typeof subtitle === 'string') {
        subtitle = <Text wrap>
            {subtitle}
        </Text>;
    } else if (typeof left === 'function') {
        const Subtitle = subtitle;

        subtitle = <Subtitle />;
    }

    if (typeof right === 'function') {
        const Right = right;

        right = <Right />;
    }

    return <Container
        flow="row"
        align={align || {
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        margin={margin}
        padding={padding}
        border={{
            top: divider && divider.top,
            bottom: divider && divider.bottom,
        }}
        style={{
            opacity: disabled ? .5 : undefined
        }}
        flex
    >
        <Container
            flow="row"
            align={{
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
            onClick={!disabled ? onClick : undefined}
            flex
        >
            {left}
            <Container
                margin={{
                    left: 1
                }}
                flex
            >
                {title}
                {subtitle}
            </Container>
        </Container>
        {right}
    </Container>
};

ListItem.propTypes = ListItemProps;

export default withTheme(ListItem);