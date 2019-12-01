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

var Phone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Phone, _React$Component);

  function Phone() {
    _classCallCheck(this, Phone);

    return _possibleConstructorReturn(this, _getPrototypeOf(Phone).apply(this, arguments));
  }

  _createClass(Phone, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.props.country !== nextProps.country || this.props.prefix !== nextProps.prefix || this.props.number !== nextProps.number;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          country = _this$props.country,
          prefix = _this$props.prefix,
          number = _this$props.number,
          center = _this$props.center,
          margin = _this$props.margin,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["country", "prefix", "number", "center", "margin", "variant"]);

      return _react["default"].createElement(_simpleUi.Container, {
        flow: "row",
        align: {
          justifyContent: 'flex-start',
          alignItems: 'center'
        },
        center: center,
        margin: margin
      }, _react["default"].createElement(_simpleUi.Flag, {
        country: country,
        size: "sm"
      }), _react["default"].createElement(_simpleUi.Text, {
        variant: variant,
        margin: {
          left: 1
        }
      }, "+", prefix, "-", number));
    }
  }]);

  return Phone;
}(_react["default"].Component);

_defineProperty(Phone, "propTypes", _uiSpec.PhoneProps);

var _default = (0, _simpleUi.withTheme)(Phone);

exports["default"] = _default;