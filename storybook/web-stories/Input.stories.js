import React, {useState} from 'react';
import {ThemeProvider} from "@yosmy/style";
import Container from '../Container';
import Input from '../Input';
import {Icon} from '../Icon';
import icons from "../_Icons";
import theme from "../_Theme";

export default {
  title: 'Input',
  component: Input,
};

const Template = ({...props}) => {
    const [text, setText] = useState(null);

    return <ThemeProvider theme={theme}>
        <Container
            background="red"
            padding={1}
        >
            <Input
                background="white"
                padding={1}
                value={text}
                onChange={(value) => {
                  setText(value);
                }}
                {...props}
            />
        </Container>
    </ThemeProvider>
};

export const Default = Template.bind({});

export const WithStart = ({...props}) => {
    const [text, setText] = useState(null);

    return <ThemeProvider theme={{
        ...theme,
        // input: {
        //     ...theme.input,
        //     background: "yellow",
        //     entry: {
        //         ...theme.input.entry,
        //         padding: {
        //             top: 1/2,
        //             right: 1,
        //             bottom: 1/2,
        //             left: 1
        //         },
        //         background: "white"
        //     }
        // }
    }}>
        <Input
            value={text}
            onChange={(value) => {
                setText(value);
            }}
            background="white"
            start={<Container
                padding={{
                    left: 1,
                    right: 1
                }}
            >
                <Icon data={icons.objects.code} size={10} />
            </Container>}
            {...props}
        />
    </ThemeProvider>
}
