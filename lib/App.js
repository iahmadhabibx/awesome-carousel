"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ChevronLeft = _interopRequireDefault(require("./jsxIcons/ChevronLeft"));
var _CarouselItem = _interopRequireDefault(require("./CarouselItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App(_ref) {
  let {
    items,
    itemsGap,
    fontSize,
    cardsWidth,
    cardsHeight,
    cardsRadius,
    boxShadowType
  } = _ref;
  const scrollableRef = (0, _react.useRef)(null);
  const [scrollPosition, setScrollPosition] = (0, _react.useState)(0);
  const carouselItems = items.map((item, i) => ({
    id: i,
    item
  }));
  const handleScroll = type => {
    if (scrollableRef.current) {
      const scrollWidth = scrollableRef.current.scrollWidth;
      const clientWidth = scrollableRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const newPosition = type === "+" ? Math.min(maxScroll, scrollPosition + 100) : Math.max(0, scrollPosition - 100);
      setScrollPosition(newPosition);
      scrollableRef.current.scrollLeft = newPosition;
    }
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "awesome-carousel"
  }, /*#__PURE__*/React.createElement("div", {
    className: `awesome__chevron`,
    onClick: () => handleScroll("-")
  }, /*#__PURE__*/React.createElement(_ChevronLeft.default, {
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: `awesome__chevron right`,
    onClick: () => handleScroll("+")
  }, /*#__PURE__*/React.createElement(_ChevronLeft.default, {
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement("section", {
    className: "awesome__card-wrapper",
    ref: scrollableRef
  }, carouselItems.map(_ref2 => {
    let {
      id,
      item
    } = _ref2;
    return /*#__PURE__*/React.createElement(_CarouselItem.default, {
      id: id,
      key: id,
      item: item,
      fontSize: fontSize,
      marginRight: itemsGap,
      cardsWidth: cardsWidth,
      cardsRadius: cardsRadius,
      cardsHeight: cardsHeight,
      boxShadowType: boxShadowType
    });
  })));
}
var _default = exports.default = App;
App.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.node).isRequired,
  cardsHeight: _propTypes.default.string.isRequired,
  cardsWidth: _propTypes.default.string.isRequired,
  boxShadowType: _propTypes.default.string,
  cardsRadius: _propTypes.default.string,
  itemsGap: _propTypes.default.string,
  fontSize: _propTypes.default.string
};
App.defaultProps = {
  cardsRadius: ".5rem",
  boxShadowType: "none",
  itemsGap: "1rem",
  cardsHeight: "100px",
  cardsWidth: "100px",
  fontSize: "1rem"
};