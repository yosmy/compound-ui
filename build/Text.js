"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _Container = require("./Container");

var _LinePlaceholder = _interopRequireDefault(require("./LinePlaceholder"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["width", "margin", "type", "contrast", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var width = _ref.width,
      margin = _ref.margin,
      type = _ref.type,
      contrast = _ref.contrast,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _react.useContext)(_style.ThemeContext);
  var preparedTheme = prepareTheme(theme.text, {
    type: type,
    contrast: contrast
  });
  margin = (0, _Container.compileMargin)(theme.spacing, _objectSpread(_objectSpread({}, _primitiveUiSpec.Container.normalizeMargin(preparedTheme.margin)), _primitiveUiSpec.Container.normalizeMargin(margin))); // Lazy

  if (children === null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinePlaceholder["default"], _objectSpread({
      margin: margin
    }, props));
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Text, _objectSpread(_objectSpread({
    width: width,
    align: preparedTheme.align,
    margin: margin,
    padding: (0, _Container.compilePadding)(theme.spacing, _objectSpread({}, _primitiveUiSpec.Container.normalizePadding(preparedTheme.padding))),
    border: preparedTheme.border,
    color: preparedTheme.color,
    background: preparedTheme.background,
    font: preparedTheme.font,
    line: preparedTheme.line,
    tag: preparedTheme.tag
  }, props), {}, {
    children: children
  }));
};

var propTypes = _objectSpread(_objectSpread({}, _primitiveUiSpec.Text.Props), {}, {
  type: _propTypes["default"].oneOf(["default", "banner", "title", "secondary", "warning", "error"]),
  contrast: _propTypes["default"].bool
});

exports.propTypes = propTypes;
var defaultProps = {
  type: undefined,
  contrast: false
};
exports.defaultProps = defaultProps;
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

var prepareTheme = function prepareTheme(theme, _ref2) {
  var type = _ref2.type,
      contrast = _ref2.contrast;
  var preparedTheme = {};

  switch (type) {
    case "default":
    case undefined:
      break;

    case "banner":
      preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), theme.banner_type);
      break;

    case "title":
      preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), theme.title_type);
      break;

    case "secondary":
      preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), theme.secondary_type);
      break;

    case "warning":
      preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), theme.warning_type);
      break;

    case "error":
      preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), theme.error_type);
      break;

    default:
      throw new Error("Unknown type ".concat(type, "."));
  }

  if (contrast) {
    preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), theme.is_contrast);
  }

  return preparedTheme;
};

var _default = Text;
exports["default"] = _default;