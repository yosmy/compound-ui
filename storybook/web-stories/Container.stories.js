import React from 'react';
import Container from '../Container';
import Text from '../Text';

export default {
  title: 'Container',
  component: Container,
};

const Template1 = ({...props}) => {
  return <Container
      border={{
        width: 1
      }}
      {...props}
  >
    <Text>Ok</Text>
  </Container>
};

const Template2 = ({...props}) => {
  const common = {
    margin: {
      left: 10
    }
  };

  return <Container table {...props}>
    <Container row>
      <Container cell>
        <Text {...common}>1</Text>
      </Container>
      <Container cell>
        <Text {...common}>2</Text>
      </Container>
    </Container>
    <Container row>
      <Container cell>
        <Text {...common}>3</Text>
      </Container>
      <Container cell>
        <Text {...common}>4</Text>
      </Container>
    </Container>
  </Container>
};

export const Border = Template1.bind({});

export const Table = Template2.bind({});

