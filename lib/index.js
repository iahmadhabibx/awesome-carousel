"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const root = _client.default.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, {
  items: ["Type 1", 8678, /*#__PURE__*/_react.default.createElement("p", null, "Type 3"), /*#__PURE__*/_react.default.createElement("p", null, "Type 4"), /*#__PURE__*/_react.default.createElement("p", null, "Type 5"), /*#__PURE__*/_react.default.createElement("p", null, "Type 6"), /*#__PURE__*/_react.default.createElement("p", null, "Type 7"), /*#__PURE__*/_react.default.createElement("p", null, "Type 8"), /*#__PURE__*/_react.default.createElement("p", null, "Type 9"), /*#__PURE__*/_react.default.createElement("p", null, "Type 10"), /*#__PURE__*/_react.default.createElement("p", null, "Type 11"), /*#__PURE__*/_react.default.createElement("p", null, "Type 12"), /*#__PURE__*/_react.default.createElement("p", null, "Type 13"), /*#__PURE__*/_react.default.createElement("p", null, "Type 14")],
  boxShadowType: "medium"
})));
(0, _reportWebVitals.default)();