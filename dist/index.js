"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styleLine = function styleLine(key, value, isStringOrNumber) {
  var type = isStringOrNumber ? typeof value === "undefined" ? "undefined" : _typeof(value) : "string";

  if (type !== "string") {
    return value ? "\"" + key + "\" : " + value + "," : "";
  } else {
    return value ? "\"" + key + "\" : \"" + value + "\"," : "";
  }
};

function FlexBox(_ref) {
  var alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      display = _ref.display,
      flex = _ref.flex,
      flexBasis = _ref.flexBasis,
      flexDirection = _ref.flexDirection,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexWrap = _ref.flexWrap,
      height = _ref.height,
      justifyContent = _ref.justifyContent,
      margin = _ref.margin,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      marginTop = _ref.marginTop,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      minHeight = _ref.minHeight,
      minWidth = _ref.minWidth,
      order = _ref.order,
      padding = _ref.padding,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight,
      paddingTop = _ref.paddingTop,
      width = _ref.width,
      children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["alignContent", "alignItems", "alignSelf", "display", "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "height", "justifyContent", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "minHeight", "minWidth", "order", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "width", "children", "style"]);

  var styleStr = "{\n    " + styleLine("alignContent", alignContent, false) + "\n    " + styleLine("alignItems", alignItems, false) + "\n    " + styleLine("alignSelf", alignSelf, false) + "\n    " + styleLine("display", display, false) + "\n    " + styleLine("flex", flex, true) + "\n    " + styleLine("flexBasis", flexBasis, true) + "\n    " + styleLine("flexDirection", flexDirection, false) + "\n    " + styleLine("flexGrow", flexGrow, true) + "\n    " + styleLine("flexShrink", flexShrink, true) + "\n    " + styleLine("flexWrap", flexWrap, false) + "\n    " + styleLine("height", height, true) + "\n    " + styleLine("justifyContent", justifyContent, false) + "\n    " + styleLine("margin", margin, true) + "\n    " + styleLine("marginBottom", marginBottom, true) + "\n    " + styleLine("marginLeft", marginLeft, true) + "\n    " + styleLine("marginRight", marginRight, true) + "\n    " + styleLine("marginTop", marginTop, true) + "\n    " + styleLine("maxHeight", maxHeight, true) + "\n    " + styleLine("maxWidth", maxWidth, true) + "\n    " + styleLine("minHeight", minHeight, true) + "\n    " + styleLine("minWidth", minWidth, true) + "\n    " + styleLine("order", order, true) + "\n    " + styleLine("padding", padding, true) + "\n    " + styleLine("paddingBottom", paddingBottom, true) + "\n    " + styleLine("paddingLeft", paddingLeft, true) + "\n    " + styleLine("paddingRight", paddingRight, true) + "\n    " + styleLine("paddingTop", paddingTop, true) + "\n    " + styleLine("width", width, true) + "\n    \"\":\"\"\n  }";

  var divProps = _extends({
    style: _extends({}, JSON.parse(styleStr), style)
  }, props);

  return _react2.default.createElement("div", divProps, children);
}

FlexBox.propTypes = {
  alignContent: _propTypes2.default.oneOf(["center", "flex-end", "flex-start", "space-around", "space-between", "stretch"]),
  alignItems: _propTypes2.default.oneOf(["baseline", "center", "flex-end", "flex-start", "stretch"]),
  alignSelf: _propTypes2.default.oneOf(["baseline", "center", "flex-end", "flex-start", "stretch"]),
  children: _propTypes2.default.node,
  display: _propTypes2.default.oneOf(["flex", "inline-flex"]),
  flex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexBasis: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexDirection: _propTypes2.default.oneOf(["column-reverse", "column", "row-reverse", "row"]),
  flexGrow: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexShrink: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flexWrap: _propTypes2.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  justifyContent: _propTypes2.default.oneOf(["center", "flex-end", "flex-start", "space-around", "space-between"]),
  margin: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginBottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  minHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  minWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  order: _propTypes2.default.number,
  padding: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingBottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

FlexBox.defaultProps = {
  display: "flex"
};

exports.default = FlexBox;