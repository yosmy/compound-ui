import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {theme, icons} from './Common';
import Button from '../../src/Button';
import Root from '../../src/Root';
import Text from '../../src/Text';
import Card from "../../src/Card";
import Container from "../../src/Container";
import Input from "../../src/Input";

storiesOf('Card', module)
    .add('with title', () => (
        <Root theme={theme}>
            <Card
                title="This is the title"
            >
                <Text>This is the content</Text>
            </Card>
        </Root>
    ))
    .add('with progress', () => (
        <Root theme={theme}>
            <Container margin={{top: 10}} />
            <Container
                padding={2}
            >
                <Card
                    title="This is the title"
                    progress
                >
                    <Text>This is the content</Text>
                </Card>
            </Container>
        </Root>
    ))
    .add('with actions', () => (
        <Root theme={theme}>
            <Container margin={{top: 10}} />
            <Card
                title="This is the title"
                actions={[
                    <Button variant="outlined">
                        <icons.actions.continue />
                        <Text>Action 1</Text>
                    </Button>,
                    <Button variant="outlined">
                        <icons.actions.delete />
                        <Text>Action 2</Text>
                    </Button>
                ]}
            >
                <Text>This is the content</Text>
                <Text>This is the content</Text>
            </Card>
        </Root>
    ))
    .add('with multiple child', () => (
        <Root theme={theme}>
            <Card
                title="This is the title"
            >
                <Text>This is one child</Text>
                <Text>This is another child</Text>
            </Card>
        </Root>
    ))
    .add('with center children', () => (
        <Root theme={theme}>
            <Container margin={{bottom: 20}} />
            <Card
                flow="column"
                align={{
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <Input
                    help="This is a help"
                />
            </Card>
        </Root>
    ))
;