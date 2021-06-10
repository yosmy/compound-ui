import React from "react";
import Text from "../Text";

export default {
    title: "Text",
    component: Text,
};

const Template = ({...props}) => {
    return <Text {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum
    </Text>
};

export const Default = Template.bind({});