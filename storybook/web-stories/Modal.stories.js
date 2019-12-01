import {useState} from 'react';
import {ThemeProvider} from "@yosmy/style";
import Modal from '../Modal';
import {Text} from '../Text';
import {PrimaryButton} from '../Button';
import theme from "../_Theme";

export default {
  title: 'Modal',
  component: Modal,
};

const Template = ({...props}) => {
  const [modal, setModal] = useState(false)

  return <ThemeProvider theme={theme}>
    <PrimaryButton onClick={() => {setModal(true);}}><Text>Open</Text></PrimaryButton>
    {modal && <Modal
        onClose={() => {setModal(false);}}
        {...props}
    >
      <Text>Text</Text>
      <PrimaryButton onClick={() => {setModal(false);}}><Text>Close</Text></PrimaryButton>
    </Modal>}
  </ThemeProvider>
};

export const Default = Template.bind({});

