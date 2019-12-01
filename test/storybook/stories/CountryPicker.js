import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {theme, icons} from './Common';
import Root from '../../src/Root';
import Container from '../../src/Container';
import CountryPicker from "../../src/CountryPicker";
import Input from "../../src/Input";

storiesOf('CountryPicker', module)
    .add('normal', () => (
        <Root theme={theme}>
            <Container margin={{top: 10}} />
            <CountryPicker
                ui={{
                    icons: {
                        actions: {
                            down: icons.actions.down
                        }
                    }
                }}
                favorites={['DE', 'BR', 'CA', 'CU', 'EC', 'ES', 'US', 'MX']}
                all={true}
                // country={'CU'}
                messages={{
                    select: "Selecciona tu país"
                }}
                onSelect={(country) => {}}
            />
            <Input placeholder="Prueba" />
        </Root>
    ))
;