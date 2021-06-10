"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _style = require("@yosmy/style");

var _Container = require("./Container");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["margin", "progress", "onClick", "type", "contrast", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var margin = _ref.margin,
      progress = _ref.progress,
      _onClick = _ref.onClick,
      type = _ref.type,
      contrast = _ref.contrast,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _react.useContext)(_style.ThemeContext);
  var preparedTheme = prepareTheme(theme, {
    type: type,
    contrast: contrast
  });

  if (progress) {
    children = putProgress(preparedTheme, children);
  }

  children = addColor(children, preparedTheme.button.color);
  children = addMargin(children);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Button, _objectSpread(_objectSpread({
    flow: "row",
    margin: (0, _Container.compileMargin)(preparedTheme.spacing, _objectSpread(_objectSpread({}, preparedTheme.button.margin), _primitiveUiSpec.Container.normalizeMargin(margin))),
    padding: (0, _Container.compilePadding)(preparedTheme.spacing, preparedTheme.button.padding),
    border: preparedTheme.button.border,
    background: preparedTheme.button.background,
    width: preparedTheme.button.width,
    height: preparedTheme.button.height,
    onClick: function onClick(value) {
      // It is still an onClick function but do nothing
      if (progress) {
        return;
      }

      _onClick(value);
    }
  }, props), {}, {
    children: children
  }));
};

var propTypes = {
  margin: _primitiveUiSpec.Container.MarginProp,
  progress: _propTypes["default"].bool,
  onClick: _primitiveUiSpec.Container.OnClickProp.isRequired,
  type: _propTypes["default"].oneOf(["primary", "secondary", "tertiary", "icon"]),
  contrast: _propTypes["default"].bool
};
exports.propTypes = propTypes;
var defaultProps = {
  type: "primary",
  contrast: false
};
exports.defaultProps = defaultProps;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

var prepareTheme = function prepareTheme(theme, _ref2) {
  var type = _ref2.type,
      contrast = _ref2.contrast;
  var preparedTheme = {};

  switch (type) {
    case "primary":
      preparedTheme = _objectSpread(_objectSpread({}, theme), {}, {
        button: _objectSpread(_objectSpread({}, theme.button), theme.button.primary_type)
      });
      break;

    case "secondary":
      preparedTheme = _objectSpread(_objectSpread({}, theme), {}, {
        button: _objectSpread(_objectSpread({}, theme.button), theme.button.secondary_type)
      });
      break;

    case "tertiary":
      preparedTheme = _objectSpread(_objectSpread({}, theme), {}, {
        button: _objectSpread(_objectSpread({}, theme.button), theme.button.tertiary_type)
      });
      break;

    case "icon":
      preparedTheme = _objectSpread(_objectSpread({}, theme), {}, {
        button: _objectSpread(_objectSpread({}, theme.button), theme.button.icon_type)
      });
      break;

    default:
      throw new Error("Unknown type ".concat(type, "."));
  }

  if (contrast) {
    preparedTheme = _objectSpread(_objectSpread({}, preparedTheme), {}, {
      button: _objectSpread(_objectSpread({}, preparedTheme.button), preparedTheme.button.is_contrast)
    });
  }

  return preparedTheme;
};

var isIcon = function isIcon(elem) {
  return !elem.props.children;
};

var putProgress = function putProgress(theme, children) {
  var count = _react["default"].Children.count(children);

  var progress = /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Progress, {
    color: theme.button.color
  });

  switch (count) {
    case 1:
      if (isIcon(children)) {
        children = progress;
      } else {
        children = [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(progress.type, _objectSpread(_objectSpread({}, progress.props), {}, {
          style: {
            position: "absolute",
            top: theme.button.padding && theme.button.progress && theme.spacing(theme.button.padding.top) + theme.button.progress.top,
            right: theme.spacing(2)
          }
        }))];
      }

      break;

    case 2:
      children = _react["default"].Children.map(children, function (child) {
        if (isIcon(child)) {
          return progress;
        }

        return child;
      });
      break;

    default:
      throw new Error("Too many components inside a button");
  }

  return children;
};

var addColor = function addColor(children, color) {
  return _react["default"].Children.map(children, function (child, i) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(child.type, _objectSpread({
      color: color
    }, child.props), i);
  });
};

var addMargin = function addMargin(children) {
  var count = _react["default"].Children.count(children);

  if (count !== 2) {
    return children;
  }

  return _react["default"].Children.map(children, function (child, i) {
    if (isIcon(child)) {
      return child;
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(child.type, _objectSpread({
      margin: {
        left: i === 1 ? 1 : 0,
        right: i === 0 ? 1 : 0
      }
    }, child.props), i);
  });
};

var _default = Button;
exports["default"] = _default;