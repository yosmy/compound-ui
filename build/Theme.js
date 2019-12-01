"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import baseHexToRgb from "hex-rgb";
//
// const hexToRgb = (hex, alpha) => {
//     const rgb = baseHexToRgb(hex);
//
//     return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
// };
// https://material-ui.com/customization/color/
var colors = {
  white: {
    base: "#ffffff"
  },
  green: {
    lightest: "#c8e6c9",
    light: "#81c784",
    base: "#4caf50",
    dark: "#388e3c",
    darkest: "#1b5e20"
  },
  red: {
    lightest: "#ffcdd2",
    light: "#e57373",
    base: "#f44336",
    dark: "#d32f2f",
    darkest: "#b71c1c"
  },
  gray: {
    lightest: "#f5f5f5",
    light: "#e0e0e0",
    base: "#9e9e9e",
    dark: "#616161",
    darkest: "#212121"
  },
  black: {
    base: "#000000"
  }
};

var buildText = function buildText(_ref) {
  var colors = _ref.colors;
  return {
    color: colors.black.base,
    size: 16 // contrast: {
    //     color: colors.gray.light1
    // },

  };
};

var buildBannerText = function buildBannerText(props) {
  var colors = props.colors;
  var parent = buildText(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    size: 28,
    color: colors.gray.base
  });
};

var buildTitleText = function buildTitleText(props) {
  var parent = buildText(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    size: 18
  });
};

var buildSecondaryText = function buildSecondaryText(props) {
  var parent = buildText(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    size: 13
  });
};

var buildButton = function buildButton(_ref2) {
  var width = _ref2.width,
      radius = _ref2.radius;
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

var buildPrimaryButton = function buildPrimaryButton(props) {
  var colors = props.colors;
  var parent = buildButton(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    border: _objectSpread(_objectSpread({}, parent.border), {}, {
      color: colors.green.low
    }),
    background: colors.green.high,
    color: colors.white.base
  });
};

var buildSecondaryButton = function buildSecondaryButton(props) {
  var colors = props.colors;
  var parent = buildButton(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    padding: _objectSpread(_objectSpread({}, parent.padding), {}, {
      left: 2,
      right: 2
    }),
    border: _objectSpread(_objectSpread({}, parent.border), {}, {
      color: colors.gray.low,
      radius: 24
    }),
    background: colors.gray.low,
    color: colors.gray.high
  });
};

var buildTertiaryButton = function buildTertiaryButton(props) {
  var colors = props.colors;
  var parent = buildButton(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    padding: _objectSpread(_objectSpread({}, parent.padding), {}, {
      left: 0,
      right: 0
    }),
    border: _objectSpread(_objectSpread({}, parent.border), {}, {
      width: 0
    }),
    color: colors.gray.high
  });
};

var buildIconButton = function buildIconButton(props) {
  var colors = props.colors;
  var parent = buildSecondaryButton(props);
  return _objectSpread(_objectSpread({}, parent), {}, {
    padding: 0,
    border: {
      width: 0,
      radius: "50%"
    },
    background: colors.gray.low,
    width: 32,
    height: 32
  });
};

var buildIcon = function buildIcon(props) {
  var colors = props.colors;
  return {
    size: 18,
    contrast: {
      color: colors.gray.base
    },
    big: {
      size: 24
    }
  };
};

var buildInput = function buildInput(props) {
  var width = props.width,
      colors = props.colors,
      radius = props.radius;
  var text = buildText(props);
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
  };
};

var buildModal = function buildModal(props) {
  var width = props.width,
      colors = props.colors,
      radius = props.radius;
  return {
    background: colors.white.base,
    border: {
      width: width,
      color: colors.gray.low,
      radius: radius
    }
  };
};

var buildCountryPicker = function buildCountryPicker(props) {
  return _objectSpread(_objectSpread({
    padding: 1
  }, buildInput(props)), {}, {
    down: {
      margin: {
        top: 0.5
      }
    }
  });
};

var buildError = function buildError(props) {
  var width = props.width,
      colors = props.colors;
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
    }
  };
};

var build = function build(props) {
  var width = props.width,
      colors = props.colors;
  return {
    spacing: function spacing(amount) {
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
        color: colors.gray.low
      }
    }
  };
};

var _default = {
  colors: colors,
  build: build
};
exports["default"] = _default;