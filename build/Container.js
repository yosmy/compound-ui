"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compilePadding = exports.compileMargin = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["margin", "padding", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = (0, _react.forwardRef)(function (_ref, ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _react.useContext)(_style.ThemeContext);
  margin = compileMargin(theme.spacing, _primitiveUiSpec.Container.normalizeMargin(margin));
  padding = compilePadding(theme.spacing, _primitiveUiSpec.Container.normalizePadding(padding));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Container, _objectSpread(_objectSpread({
    ref: ref,
    margin: margin,
    padding: padding
  }, props), {}, {
    children: children
  }));
});

var compileMargin = function compileMargin(spacing, margin) {
  margin = _primitiveUiSpec.Container.normalizeMargin(margin);

  if (typeof margin === "undefined") {
    return margin;
  }

  if (margin.raw) {
    return margin;
  }

  if (margin.top) {
    margin = _objectSpread(_objectSpread({}, margin), {}, {
      top: spacing(margin.top)
    });
  }

  if (margin.bottom) {
    margin = _objectSpread(_objectSpread({}, margin), {}, {
      bottom: spacing(margin.bottom)
    });
  }

  if (margin.left) {
    margin = _objectSpread(_objectSpread({}, margin), {}, {
      left: spacing(margin.left)
    });
  }

  if (margin.right) {
    margin = _objectSpread(_objectSpread({}, margin), {}, {
      right: spacing(margin.right)
    });
  }

  return margin;
};

exports.compileMargin = compileMargin;

var compilePadding = function compilePadding(spacing, padding) {
  if (typeof padding === "undefined") {
    return padding;
  }

  if (typeof padding === "number") {
    padding = {
      top: padding,
      bottom: padding,
      left: padding,
      right: padding
    };
  }

  if (padding.raw) {
    return padding;
  }

  if (padding.top) {
    padding = _objectSpread(_objectSpread({}, padding), {}, {
      top: spacing(padding.top)
    });
  }

  if (padding.bottom) {
    padding = _objectSpread(_objectSpread({}, padding), {}, {
      bottom: spacing(padding.bottom)
    });
  }

  if (padding.left) {
    padding = _objectSpread(_objectSpread({}, padding), {}, {
      left: spacing(padding.left)
    });
  }

  if (padding.right) {
    padding = _objectSpread(_objectSpread({}, padding), {}, {
      right: spacing(padding.right)
    });
  }

  return padding;
};

exports.compilePadding = compilePadding;
Container.propTypes = _primitiveUiSpec.Container.Props;
var _default = Container;
exports["default"] = _default;