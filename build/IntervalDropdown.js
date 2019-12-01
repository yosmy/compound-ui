"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntervalDropdown = exports.resolveInterval = void 0;

var _react = _interopRequireDefault(require("react"));

var _simpleUi = require("@yosmy/simple-ui");

var _date = require("@yosmy/date");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolveInterval = function resolveInterval(key) {
  var from, to, group;
  var now = Date.now();

  switch (key) {
    case 'last_year':
      // Beginning of last year
      from = (0, _date.subYears)((0, _date.startOfYear)(now), 1);
      from = (0, _date.getTime)(from); // Beginning of current year

      to = (0, _date.addYears)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = 'by-month';
      break;

    case 'last_month':
      // Beginning of last month
      from = (0, _date.subMonths)((0, _date.startOfMonth)(now), 1);
      from = (0, _date.getTime)(from); // Beginning of current month

      to = (0, _date.addMonths)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = 'by-day';
      break;

    case 'last_week':
      // Beginning of last week
      from = (0, _date.subWeeks)((0, _date.startOfWeek)(now), 1);
      from = (0, _date.getTime)(from); // Beginning of current week

      to = (0, _date.addWeeks)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = 'by-day';
      break;

    case 'current_year':
      from = (0, _date.startOfYear)(now);
      from = (0, _date.getTime)(from); // Beginning of next year

      to = (0, _date.addYears)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = 'by-month';
      break;

    case 'current_month':
      // Beginning of current month
      from = (0, _date.startOfMonth)(now);
      from = (0, _date.getTime)(from); // Beginning of next month

      to = (0, _date.startOfMonth)(now);
      to = (0, _date.addMonths)(to, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = 'by-day';
      break;

    case 'current_week':
      // Beginning of current week
      from = (0, _date.startOfWeek)(now);
      from = (0, _date.getTime)(from); // Beginning of next week

      to = (0, _date.startOfWeek)(now);
      to = (0, _date.addWeeks)(to, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = 'by-day';
      break;

    default:
      throw "Interval not supported";
  }

  return {
    key: key,
    from: from,
    to: to,
    timezone: (0, _date.getTimezone)(),
    group: group
  };
};

exports.resolveInterval = resolveInterval;

var IntervalDropdown = function IntervalDropdown(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;
  return _react["default"].createElement(_simpleUi.Dropdown, {
    label: "Intervalo",
    value: value,
    data: [{
      label: 'Año pasado',
      value: 'last_year'
    }, {
      label: 'Mes pasado',
      value: 'last_month'
    }, {
      label: 'Semana pasada',
      value: 'last_week'
    }, {
      label: 'Año actual',
      value: 'current_year'
    }, {
      label: 'Mes actual',
      value: 'current_month'
    }, {
      label: 'Semana actual',
      value: 'current_week'
    }],
    onChange: function onChange(interval) {
      _onChange(resolveInterval(interval));
    }
  });
};

var IntervalDropdownWithTheme = (0, _simpleUi.withTheme)(IntervalDropdown);
exports.IntervalDropdown = IntervalDropdownWithTheme;