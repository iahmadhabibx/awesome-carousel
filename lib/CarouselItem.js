"use strict";

exports.__esModule = true;
exports.default = CarouselItem;
var _react = _interopRequireDefault(require("react"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CarouselItem({
  bg,
  item,
  boxShadowType,
  cardsRadius,
  cardsHeight,
  cardsWidth,
  fontSize
}) {
  const boxShadow = _constants.BOX_SHADOWS[boxShadowType] || _constants.BOX_SHADOWS.none;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "awesome__card",
    style: {
      backgroundColor: bg,
      boxShadow,
      borderRadius: cardsRadius,
      height: cardsHeight,
      width: cardsWidth,
      fontSize
    }
  }, item);
}