"use strict";

exports.__esModule = true;
exports.default = AwesomeCarousel;
var _react = _interopRequireWildcard(require("react"));
var _CarouselItem = _interopRequireDefault(require("./CarouselItem"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ChevronIcon({
  flipped
}) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "awesome__chevron-icon",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    style: flipped ? {
      transform: "scaleX(-1)"
    } : undefined
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z",
    clipRule: "evenodd"
  }));
}
function AwesomeCarousel({
  items,
  itemsGap = "1rem",
  fontSize = "1rem",
  cardsWidth,
  cardsHeight,
  cardsRadius = "0.75rem",
  boxShadowType = "none",
  cardBackgroundColor = "#fff"
}) {
  const scrollableRef = (0, _react.useRef)(null);
  const [scrollPosition, setScrollPosition] = (0, _react.useState)(0);
  const syncScroll = (0, _react.useCallback)(() => {
    const el = scrollableRef.current;
    if (el) setScrollPosition(el.scrollLeft);
  }, []);
  const scrollByDirection = direction => {
    const el = scrollableRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const step = Math.max(120, Math.round(el.clientWidth * 0.85));
    const next = direction === "next" ? Math.min(maxScroll, scrollPosition + step) : Math.max(0, scrollPosition - step);
    setScrollPosition(next);
    el.scrollLeft = next;
  };
  return /*#__PURE__*/_react.default.createElement("aside", {
    className: "awesome-carousel",
    "aria-roledescription": "carousel",
    style: {
      "--ac-item-gap": itemsGap
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "awesome__chevron",
    "aria-label": "Previous items",
    onClick: () => scrollByDirection("prev")
  }, /*#__PURE__*/_react.default.createElement(ChevronIcon, null)), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "awesome__chevron awesome__chevron--right",
    "aria-label": "Next items",
    onClick: () => scrollByDirection("next")
  }, /*#__PURE__*/_react.default.createElement(ChevronIcon, {
    flipped: true
  })), /*#__PURE__*/_react.default.createElement("section", {
    className: "awesome__card-wrapper",
    ref: scrollableRef,
    onScroll: syncScroll,
    tabIndex: 0,
    "aria-label": "Carousel items"
  }, items.map((item, id) => /*#__PURE__*/_react.default.createElement(_CarouselItem.default, {
    key: id,
    item: item,
    fontSize: fontSize,
    cardsWidth: cardsWidth,
    bg: cardBackgroundColor,
    cardsRadius: cardsRadius,
    cardsHeight: cardsHeight,
    boxShadowType: boxShadowType
  }))));
}