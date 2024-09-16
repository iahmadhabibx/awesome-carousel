"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ChevronLeft = _interopRequireDefault(require("./jsxIcons/ChevronLeft"));
var _CarouselItem = _interopRequireDefault(require("./CarouselItem"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function AwesomeCarousel(_ref) {
  var items = _ref.items,
    itemsGap = _ref.itemsGap,
    fontSize = _ref.fontSize,
    cardsWidth = _ref.cardsWidth,
    cardsHeight = _ref.cardsHeight,
    cardsRadius = _ref.cardsRadius,
    boxShadowType = _ref.boxShadowType,
    cardBackgroundColor = _ref.cardBackgroundColor;
  var scrollableRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollPosition = _useState2[0],
    setScrollPosition = _useState2[1];
  var carouselItems = items.map(function (item, i) {
    return {
      id: i,
      item: item
    };
  });
  var handleScroll = function handleScroll(type) {
    if (scrollableRef.current) {
      var scrollWidth = scrollableRef.current.scrollWidth;
      var clientWidth = scrollableRef.current.clientWidth;
      var maxScroll = scrollWidth - clientWidth;
      var newPosition = type === "+" ? Math.min(maxScroll, scrollPosition + 100) : Math.max(0, scrollPosition - 100);
      setScrollPosition(newPosition);
      scrollableRef.current.scrollLeft = newPosition;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("aside", {
    className: "awesome-carousel"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "awesome__chevron",
    onClick: function onClick() {
      return handleScroll("-");
    }
  }, /*#__PURE__*/_react["default"].createElement(_ChevronLeft["default"], {
    width: 20,
    height: 20
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "awesome__chevron right",
    onClick: function onClick() {
      return handleScroll("+");
    }
  }, /*#__PURE__*/_react["default"].createElement(_ChevronLeft["default"], {
    width: 20,
    height: 20
  })), /*#__PURE__*/_react["default"].createElement("section", {
    className: "awesome__card-wrapper",
    ref: scrollableRef
  }, carouselItems.map(function (_ref2) {
    var id = _ref2.id,
      item = _ref2.item;
    return /*#__PURE__*/_react["default"].createElement(_CarouselItem["default"], {
      id: id,
      key: id,
      item: item,
      fontSize: fontSize,
      marginRight: itemsGap,
      cardsWidth: cardsWidth,
      bg: cardBackgroundColor,
      cardsRadius: cardsRadius,
      cardsHeight: cardsHeight,
      boxShadowType: boxShadowType
    });
  })));
}
var _default = exports["default"] = AwesomeCarousel;
AwesomeCarousel.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,
  cardsHeight: _propTypes["default"].string.isRequired,
  cardsWidth: _propTypes["default"].string.isRequired,
  cardBackgroundColor: _propTypes["default"].string,
  boxShadowType: _propTypes["default"].string,
  cardsRadius: _propTypes["default"].string,
  itemsGap: _propTypes["default"].string,
  fontSize: _propTypes["default"].string
};
AwesomeCarousel.defaultProps = {
  cardsRadius: ".5rem",
  boxShadowType: "none",
  itemsGap: "1rem",
  cardsHeight: "100px",
  cardsWidth: "100px",
  fontSize: "1rem",
  cardBackgroundColor: "#fff"
};