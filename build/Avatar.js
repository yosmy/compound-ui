"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiSpec = require("@yosmy/ui-spec");

var _simpleUi = require("@yosmy/simple-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          source = _this$props.source,
          margin = _this$props.margin,
          size = _this$props.size,
          resize = _this$props.resize,
          rounded = _this$props.rounded,
          onClick = _this$props.onClick,
          style = _this$props.style,
          props = _objectWithoutProperties(_this$props, ["source", "margin", "size", "resize", "rounded", "onClick", "style"]);

      (0, _uiSpec.validateExtraProps)(props, ['theme', 'children', 'replaceTheme', 'updateTheme']);

      switch (size) {
        case 'sm':
          size = 34;
          break;

        case 'md':
          size = 50;
          break;

        case 'lg':
          size = 75;
          break;

        case 'xl':
        case undefined:
          size = 150;
          break;

        default:
          throw new Error("Invalid size \"".concat(size, "\""));
      }

      var image = _react["default"].createElement(_simpleUi.Image, _extends({
        source: source,
        width: size,
        height: size,
        resizeMode: resize || "cover",
        margin: margin,
        style: _objectSpread({
          borderRadius: rounded ? _simpleUi.Platform.select({
            'ios': size / 2,
            'android': size
          }) : undefined
        }, style)
      }, props));

      if (onClick) {
        return _react["default"].createElement(_simpleUi.Container, {
          onClick: onClick
        }, image);
      }

      return image;
    }
  }]);

  return Avatar;
}(_react["default"].Component); // class Avatar extends React.Component {
//     static propTypes = AvatarProps;
//
//     render() {
//         let {
//             theme,
//             source, text,
//             size, rounded,
//             center, margin,
//             onEdit,
//             style, children, ...props
//         } = this.props;
//
//         validateExtraProps(props, ['replaceTheme', 'updateTheme']);
//
//         source = buildSource(source);
//
//         size = buildSize(size);
//
//         rounded = buildRounded(rounded);
//
//         const onEditPress = buildOnEditPress(onEdit);
//
//         const containerStyle = buildContainerStyle(theme, center, margin, style);
//
//         return <BaseAvatar
//             source={source}
//             text={text}
//             size={size}
//             rounded={rounded}
//             onEditPress={onEditPress}
//             showEditButton={typeof onEdit !== 'undefined'}
//             containerStyle={containerStyle}
//         />;
//     }
// }


_defineProperty(Avatar, "propTypes", _uiSpec.AvatarProps);

var buildSource = function buildSource(source) {
  if (typeof source === 'string') {
    source = {
      uri: source
    };
  }

  return source;
};

var buildSize = function buildSize(size) {
  // https://github.com/react-native-elements/react-native-elements/blob/next/src/avatar/Avatar.js#L21
  switch (size) {
    case 'sm':
      // 34
      return 'small';

    case 'md':
      // 50
      return 'medium';

    case 'lg':
      // 75
      return 'large';

    case 'xl':
      // 150
      return 'xlarge';

    case undefined:
      return 'xlarge';

    default:
      throw new Error("Invalid size \"".concat(size, "\""));
  }
};

var buildRounded = function buildRounded(rounded) {
  return rounded;
};

var buildOnEditPress = function buildOnEditPress(onEdit) {
  return onEdit;
};

var buildContainerStyle = function buildContainerStyle(theme, center, margin, style) {
  return _objectSpread({}, (0, _uiSpec.prepareFlexChildStyle)({
    center: center
  }), {}, (0, _uiSpec.prepareMarginStyle)(margin, theme), {}, style);
};

var _default = (0, _simpleUi.withTheme)(Avatar);

exports["default"] = _default;