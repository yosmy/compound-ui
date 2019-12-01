import React from 'react';
import {ErrorProps, validateExtraProps, prepareMarginStyle} from "@yosmy/ui-spec";
import {Container, Text, withTheme} from '@yosmy/simple-ui';

class Error extends React.Component {
    static propTypes = ErrorProps;

    render() {
        let {
            theme,
            margin,
            children, style, ...props
        } = this.props;

        validateExtraProps(props, ['replaceTheme', 'updateTheme']);

        style = {
            ...prepareMarginStyle(margin, theme),
            alignSelf: 'stretch',
            backgroundColor: theme.palette.error.main,
            padding: 4,
            ...style
        };

        const Layout = ({first, children, ...props}) => {
            return <Text
                center
                margin={{
                    top: first === false ? 1 : undefined
                }}
                style={{
                    color: theme.palette.error.contrast,
                    textAlign: 'center'
                }}
                {...props} // key prop
            >
                {children}
            </Text>;
        };

        if (React.Children.count(children) === 1) {
            children = <Layout>
                {children}
            </Layout>
        } else {
            children = React.Children.map(children, (child, i) => {
                return <Layout
                    key={i}
                    first={i === 0}
                >
                    {child}
                </Layout>
            })
        }

        return <Container
            style={style}
            {...props}
        >
            {children}
        </Container>
    }
}

export default withTheme(Error);