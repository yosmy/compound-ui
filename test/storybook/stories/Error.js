import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {theme} from './Common';
import Root from '../../src/Root';
import Error from "../../src/Error";
import Container from "../../src/Container";

storiesOf('Error', module)
    .add('default', () => (
        <Root theme={theme}>
            <Error>This is an error</Error>
        </Root>
    ))
;