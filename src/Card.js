import React from 'react';
import {CardProps, validateExtraProps} from "@yosmy/ui-spec";
import {Container, Text, Progress, withTheme} from "@yosmy/simple-ui";

class Card extends React.Component {
    static propTypes = CardProps;

    render() {
        let {
            theme,
            title,
            progress,
            actions,
            flow, align,
            margin, padding,
            background,
            style, children, ...props
        } = this.props;

        validateExtraProps(props, ['replaceTheme', 'updateTheme']);

        if (actions) {
            actions = actions.map((action, i) => {
                // Margin in all but the first
                const margin = i !== 0
                    ? {
                        left: 2
                    } : undefined;

                return <action.type
                    key={i}
                    margin={margin}
                    {...action.props}
                />
            });

            actions = <Container
                flow="row"
                align={{
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
                margin={{
                    top: 2
                }}
            >
                {actions}
            </Container>;
        }

        return <Container
            margin={margin}
            padding={1}
            background={background}
            border={theme.line}
        >
            {title && <Container
                flow="row"
                align={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
                width="100%"
            >
                <Text variant="title">{title}</Text>
                {progress && <Progress
                    margin={{
                        right: 1.5
                    }}
                    style={{
                        position: 'absolute',
                        right: 0,
                    }}
                />}
            </Container>}
            <Container
                flow={flow}
                align={align}
                margin={{
                    top: 1
                }}
                padding={padding}
            >
                {children}
            </Container>
            {actions && <Container
                flow="row"
                align={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}
            >
                {actions}
            </Container>}
        </Container>
    }
}

export default withTheme(Card);