import React from 'react';
import {PhoneProps} from "@yosmy/ui-spec";
import {Container, Flag, Text, withTheme} from "@yosmy/simple-ui";

class Phone extends React.Component {
    static propTypes = PhoneProps;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            this.props.country !== nextProps.country
            || this.props.prefix !== nextProps.prefix
            || this.props.number !== nextProps.number
        );
    }

    render() {
        let {
            country, prefix, number,
            center, margin, variant,
            ...props
        } = this.props;

        return <Container
            flow="row"
            align={{
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
            center={center}
            margin={margin}
        >
            <Flag
                country={country}
                size="sm"
            />
            <Text
                variant={variant}
                margin={{
                    left: 1
                }}
            >
                +{prefix}-{number}
            </Text>
        </Container>
    }
}

export default withTheme(Phone);
