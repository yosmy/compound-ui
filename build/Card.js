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

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          progress = _this$props.progress,
          actions = _this$props.actions,
          flow = _this$props.flow,
          align = _this$props.align,
          margin = _this$props.margin,
          padding = _this$props.padding,
          background = _this$props.background,
          style = _this$props.style,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["theme", "title", "progress", "actions", "flow", "align", "margin", "padding", "background", "style", "children"]);

      (0, _uiSpec.validateExtraProps)(props, ['replaceTheme', 'updateTheme']);

      if (actions) {
        actions = actions.map(function (action, i) {
          // Margin in all but the first
          var margin = i !== 0 ? {
            left: 2
          } : undefined;
          return _react["default"].createElement(action.type, _extends({
            key: i,
            margin: margin
          }, action.props));
        });
        actions = _react["default"].createElement(_simpleUi.Container, {
          flow: "row",
          align: {
            justifyContent: 'flex-start',
            alignItems: 'center'
          },
          margin: {
            top: 2
          }
        }, actions);
      }

      return _react["default"].createElement(_simpleUi.Container, {
        margin: margin,
        padding: 1,
        background: background,
        border: theme.line
      }, title && _react["default"].createElement(_simpleUi.Container, {
        flow: "row",
        align: {
          justifyContent: "center",
          alignItems: "center"
        },
        width: "100%"
      }, _react["default"].createElement(_simpleUi.Text, {
        variant: "title"
      }, title), progress && _react["default"].createElement(_simpleUi.Progress, {
        margin: {
          right: 1.5
        },
        style: {
          position: 'absolute',
          right: 0
        }
      })), _react["default"].createElement(_simpleUi.Container, {
        flow: flow,
        align: align,
        margin: {
          top: 1
        },
        padding: padding
      }, children), actions && _react["default"].createElement(_simpleUi.Container, {
        flow: "row",
        align: {
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }
      }, actions));
    }
  }]);

  return Card;
}(_react["default"].Component);

_defineProperty(Card, "propTypes", _uiSpec.CardProps);

var _default = (0, _simpleUi.withTheme)(Card);

exports["default"] = _default;