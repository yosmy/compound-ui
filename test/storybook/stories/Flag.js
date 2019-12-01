import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {theme} from './Common';
import Root from '../../src/Root';
import Flag from "../../src/Flag";

storiesOf('Flag', module)
    .add('normal', () => (
        <Root theme={theme}>
            <Flag
                country="CU"
            />
        </Root>
    ))
;