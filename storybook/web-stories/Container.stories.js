import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import Container from '../Container';
import {Text} from '../Text';
import theme from "../_Theme";

export default {
  title: 'Container',
  component: Container,
};

const Template1 = ({...props}) => {
  return <ThemeProvider theme={theme}>
    <Container
        border={{
          width: 1
        }}
      // border={{
      //   color: theme.input.border.color,
      //   bottom: {
      //     width: theme.input.border.width,
      //   }
      // }}
      {...props}
    >
      <Text>Ok</Text>
    </Container>
  </ThemeProvider>
};

const Template2 = ({...props}) => {
  const common = {
    margin: {
      left: 10
    }
  };

  return <ThemeProvider theme={theme}>
    <Container table {...props}>
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
  </ThemeProvider>
};

export const Border = Template1.bind({});

export const Table = Template2.bind({});

