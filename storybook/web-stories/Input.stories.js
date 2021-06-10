import React, {useState} from 'react';
import Container from '../Container';
import Input from '../Input';
import Icon from '../Icon';
import icons from "../_Icons";

export default {
  title: 'Input',
  component: Input,
};

const Template = ({...props}) => {
    const [text, setText] = useState(null);

    return <Container
        background="red"
        padding={1}
    >
        <Input
            value={text}
            onChange={(value) => {
                setText(value);
            }}
            {...props}
        />
    </Container>
};

export const Default = Template.bind({});

export const WithStart = ({...props}) => {
    const [text, setText] = useState(null);

    return <Input
        value={text}
        onChange={(value) => {
            setText(value);
        }}
        start={<Container
            padding={{
                left: 1,
                right: 1
            }}
        >
            <Icon data={icons.objects.code} />
        </Container>}
        {...props}
    />
}
