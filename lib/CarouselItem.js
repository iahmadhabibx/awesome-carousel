"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CarouselItem = _ref => {
  let {
    id,
    item,
    boxShadowType,
    marginRight,
    cardsRadius,
    cardsHeight,
    cardsWidth
  } = _ref;
  const boxShadow = _constants.BOX_SHADOWS[boxShadowType] || _constants.BOX_SHADOWS.none;
  const [clickedElement, setClickedElement] = (0, _react.useState)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `awesome__card ${clickedElement === id ? "clicked" : ""}`,
    style: {
      boxShadow,
      marginRight,
      borderRadius: cardsRadius,
      height: cardsHeight,
      width: cardsWidth
    },
    onClick: () => {
      setClickedElement(id);
    },
    onAnimationEnd: () => setClickedElement("")
  }, item);
};
var _default = exports.default = CarouselItem;
CarouselItem.propTypes = {
  cardsHeight: _propTypes.default.string.isRequired,
  cardsWidth: _propTypes.default.string.isRequired,
  item: _propTypes.default.node.isRequired,
  id: _propTypes.default.number.isRequired,
  boxShadowType: _propTypes.default.string,
  marginRight: _propTypes.default.string,
  fontSize: _propTypes.default.string
};