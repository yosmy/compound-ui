// import baseHexToRgb from "hex-rgb";
//
// const hexToRgb = (hex, alpha) => {
//     const rgb = baseHexToRgb(hex);
//
//     return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
// };

// https://material-ui.com/customization/color/

const colors = {
    white: {
        base: "#ffffff"
    },
    green: {
        lightest: "#c8e6c9",
        light: "#81c784",
        base: "#4caf50",
        dark: "#388e3c",
        darkest: "#1b5e20",
    },
    red: {
        lightest: "#ffcdd2",
        light: "#e57373",
        base: "#f44336",
        dark: "#d32f2f",
        darkest: "#b71c1c",
    },
    gray: {
        lightest: "#f5f5f5",
        light: "#e0e0e0",
        base: "#9e9e9e",
        dark: "#616161",
        darkest: "#212121",
    },
    black: {
        base: "#000000"
    }
};

const buildText = ({colors}) => {
    return {
        color: colors.black.base,
        size: 16,
        // contrast: {
        //     color: colors.gray.light1
        // },
    };
};

const buildBannerText = (props) => {
    const {colors} = props;

    const parent = buildText(props);

    return {
        ...parent,
        size: 28,
        color: colors.gray.base
    }
};

const buildTitleText = (props) => {
    const parent = buildText(props);

    return {
        ...parent,
        size: 18,
    }
};

const buildSecondaryText = (props) => {
    const parent = buildText(props);

    return {
        ...parent,
        size: 13,
    }
};

const buildButton = ({width, radius}) => {
    return {
        padding: {
            top: 1,
            bottom: 1,
            left: 3,
            right: 3
        },
        border: {
            width: width,
            radius: radius
        },
        progress: {
            top: 5
        }
    };
};

const buildPrimaryButton = (props) => {
    const {colors} = props;

    const parent = buildButton(props);

    return {
        ...parent,
        border: {
            ...parent.border,
            color: colors.green.low,
        },
        background: colors.green.high,
        color: colors.white.base,
    }
};

const buildSecondaryButton = (props) => {
    const {colors} = props;

    const parent = buildButton(props);

    return {
        ...parent,
        padding: {
            ...parent.padding,
            left: 2,
            right: 2
        },
        border: {
            ...parent.border,
            color: colors.gray.low,
            radius: 24
        },
        background: colors.gray.low,
        color: colors.gray.high,
    }
};

const buildTertiaryButton = (props) => {
    const {colors} = props;

    const parent = buildButton(props);

    return {
        ...parent,
        padding: {
            ...parent.padding,
            left: 0,
            right: 0
        },
        border: {
            ...parent.border,
            width: 0,
        },
        color: colors.gray.high,
    }
};

const buildIconButton = (props) => {
    const {colors} = props;

    const parent = buildSecondaryButton(props);

    return {
        ...parent,
        padding: 0,
        border: {
            width: 0,
            radius: "50%"
        },
        background: colors.gray.low,
        width: 32,
        height: 32
    }
};

const buildIcon = (props) => {
    const {colors} = props;

    return {
        size: 18,
        contrast: {
            color: colors.gray.base
        },
        big: {
            size: 24
        }
    }
};

const buildInput = (props) => {
    const {width, colors, radius} = props;

    const text = buildText(props);

    return {
        background: colors.gray.dark,
        border: {
            width: width,
            color: colors.gray.darkest,
            radius: radius
        },
        entry: {
            margin: 0,
            padding: {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            },
            color: colors.gray.dark,
            size: text.size
        }
    }
};

const buildModal = (props) => {
    const {width, colors, radius} = props;

    return {
        background: colors.white.base,
        border: {
            width: width,
            color: colors.gray.low,
            radius: radius
        }
    }
};

const buildCountryPicker = (props) => {
    return {
        padding: 1,
        ...buildInput(props),
        down: {
            margin: {
                top: 0.5,
            }
        }
    };
};

const buildError = (props) => {
    const {width, colors} = props;

    return {
        padding: {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1
        },
        color: colors.white.base,
        background: colors.red.high,
        border: {
            width: width,
            color: colors.red.low,
            radius: 8
        },
    };
};

const build = (props) => {
    const {width, colors} = props;

    return {
        spacing: (amount) => {
            return amount * 8;
        },
        text: buildText(props),
        banner_text: buildBannerText(props),
        title_text: buildTitleText(props),
        secondary_text: buildSecondaryText(props),
        button: buildButton(props),
        primary_button: buildPrimaryButton(props),
        secondary_button: buildSecondaryButton(props),
        tertiary_button: buildTertiaryButton(props),
        icon_button: buildIconButton(props),
        // warning_button: {
        //     background: colors.amber.light1,
        //     color: colors.amber.dark2,
        //     border: {
        //         color: colors.amber.base,
        //     }
        // },
        // danger_button: {
        //     background: colors.red.base,
        //     color: colors.red.light1,
        //     border: {
        //         color: colors.red.dark2,
        //     }
        // },
        // tab_button: {
        //     color: colors.indigo.base,
        //     padding: {
        //         left: 2,
        //         right: 2,
        //     },
        //     border: {
        //         width: 0,
        //         color: colors.gray.base,
        //         radius: 0,
        //     }
        // },
        icon: buildIcon(props),
        // card: {
        //     flow: "column",
        //     align: {
        //         main: "flex-start",
        //         cross: "flex-start"
        //     },
        //     margin: {
        //         top: 0,
        //         // To show shadow properly
        //         bottom: 2,
        //         left: 2,
        //         right: 2
        //     },
        //     padding: {
        //         top: 2,
        //         bottom: 2,
        //         left: 2,
        //         right: 2
        //     },
        //     background: colors.gray.light1,
        //     border: {
        //         width: width,
        //         color: colors.gray.base,
        //         radius: 8
        //     },
        //     shadow: {
        //         // https://ethercreative.github.io/react-native-shadow-generator/
        //         color: colors.gray.dark2,
        //         width: 0,
        //         height: 2,
        //         opacity: 0.23,
        //         radius: 2.62,
        //         elevation: 4
        //     },
        // },
        // warning_card: {
        //     title: {
        //         color: colors.gray.light1,
        //         background: colors.amber.base
        //         // gradient: {
        //         //     colors: [
        //         //         colors.amber.light2,
        //         //         colors.gray.light1,
        //         //     ],
        //         // },
        //     },
        //     border: {
        //         color: colors.amber.base,
        //         width: 2
        //     }
        // },
        country_picker: buildCountryPicker(props),
        error: buildError(props),
        // warning: {
        //     padding: {
        //         top: 1,
        //         bottom: 1,
        //         left: 3,
        //         right: 3
        //     },
        //     color: colors.amber.light1,
        //     background: colors.amber.base,
        //     border: {
        //         width: width,
        //         color: colors.gray.dark2,
        //         radius: 8
        //     },
        // },
        input: buildInput(props),
        modal: buildModal(props),
        divider: {
            border: {
                width: width,
                color: colors.gray.low,
            },
        },
    };
};

export default {
    colors,
    build
};