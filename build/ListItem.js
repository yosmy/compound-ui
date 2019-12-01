"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiSpec = require("@yosmy/ui-spec");

var _simpleUi = require("@yosmy/simple-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItem = function ListItem(props) {
  var align = props.align,
      margin = props.margin,
      padding = props.padding,
      divider = props.divider,
      disabled = props.disabled,
      left = props.left,
      title = props.title,
      subtitle = props.subtitle,
      right = props.right,
      onClick = props.onClick;

  if (typeof left === 'function') {
    var Left = left;
    left = _react["default"].createElement(Left, null);
  }

  if (typeof title === 'string') {
    title = _react["default"].createElement(_simpleUi.Text, null, title);
  } else if (typeof left === 'function') {
    var Title = title;
    title = _react["default"].createElement(Title, null);
  }

  if (typeof subtitle === 'string') {
    subtitle = _react["default"].createElement(_simpleUi.Text, {
      wrap: true
    }, subtitle);
  } else if (typeof left === 'function') {
    var Subtitle = subtitle;
    subtitle = _react["default"].createElement(Subtitle, null);
  }

  if (typeof right === 'function') {
    var Right = right;
    right = _react["default"].createElement(Right, null);
  }

  return _react["default"].createElement(_simpleUi.Container, {
    flow: "row",
    align: align || {
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    margin: margin,
    padding: padding,
    border: {
      top: divider && divider.top,
      bottom: divider && divider.bottom
    },
    style: {
      opacity: disabled ? .5 : undefined
    },
    flex: true
  }, _react["default"].createElement(_simpleUi.Container, {
    flow: "row",
    align: {
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    onClick: !disabled ? onClick : undefined,
    flex: true
  }, left, _react["default"].createElement(_simpleUi.Container, {
    margin: {
      left: 1
    },
    flex: true
  }, title, subtitle)), right);
};

ListItem.propTypes = _uiSpec.ListItemProps;

var _default = (0, _simpleUi.withTheme)(ListItem);

exports["default"] = _default;