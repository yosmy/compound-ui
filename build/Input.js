"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _service = require("@yosmy/service");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _Container = _interopRequireWildcard(require("./Container"));

var _Text = _interopRequireDefault(require("./Text"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["margin", "width", "id", "value", "placeholder", "focus", "keyboard", "length", "multi", "secure", "capitalize", "onChange", "onEnter", "start", "end", "help", "error"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = (0, _react.forwardRef)(function (_ref, ref) {
  var margin = _ref.margin,
      width = _ref.width,
      id = _ref.id,
      value = _ref.value,
      placeholder = _ref.placeholder,
      focus = _ref.focus,
      keyboard = _ref.keyboard,
      length = _ref.length,
      multi = _ref.multi,
      secure = _ref.secure,
      capitalize = _ref.capitalize,
      onChange = _ref.onChange,
      onEnter = _ref.onEnter,
      start = _ref.start,
      end = _ref.end,
      help = _ref.help,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _service.useService)("theme");
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], _objectSpread(_objectSpread({
    flow: "column",
    align: {
      main: "flex-start"
    },
    margin: margin,
    width: width
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
      flow: "row",
      align: {
        main: "flex-start",
        cross: "center"
      },
      padding: theme.input.padding,
      border: _objectSpread(_objectSpread({}, theme.input.border), {}, {
        fix: true // Fix radius

      }),
      background: theme.input.background,
      children: [start && /*#__PURE__*/(0, _jsxRuntime.jsx)(start.type, _objectSpread({
        margin: theme.input.start.margin,
        padding: theme.input.start.padding,
        color: theme.input.start.color
      }, start.props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Input, {
        ref: ref,
        id: id,
        flex: 1,
        margin: (0, _Container.compileMargin)(theme.spacing, theme.input.entry.margin),
        padding: (0, _Container.compilePadding)(theme.spacing, theme.input.entry.padding),
        color: theme.input.entry.color,
        background: theme.input.entry.background,
        font: theme.input.entry.font,
        value: value,
        placeholder: placeholder,
        focus: focus,
        keyboard: keyboard,
        length: length,
        multi: multi,
        secure: secure,
        capitalize: capitalize,
        onChange: onChange,
        onEnter: onEnter
      }), end && /*#__PURE__*/(0, _jsxRuntime.jsx)(end.type, _objectSpread({
        color: theme.input.entry.color
      }, end.props))]
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text["default"], {
      type: "secondary",
      margin: {
        top: 0.5
      },
      children: help
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text["default"], {
      type: "error",
      align: {
        main: "flex-start"
      },
      margin: {
        top: 0.5
      },
      padding: {
        top: 0.5,
        bottom: 0.5,
        right: 0.5
      },
      children: error
    })]
  }));
});
Input.propTypes = _objectSpread({
  margin: _primitiveUiSpec.Container.MarginProp,
  width: _primitiveUiSpec.Container.WidthProp,
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  start: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  end: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
}, _primitiveUiSpec.Input.Props); // const renderHelp = (help) => {
//     return help && (!Array.isArray(help)
//         ? <Text>
//             {help}
//         </Text>
//         : help.map((line, i) => {
//             return <Text
//                 key={i}
//             >
//                 {line}
//             </Text>
//         })
//     )
// }

var _default = Input;
exports["default"] = _default;