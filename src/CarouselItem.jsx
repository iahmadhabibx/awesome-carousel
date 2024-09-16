import React, { useState } from "react";
import PropTypes from "prop-types";
import { BOX_SHADOWS } from "./constants";

const CarouselItem = ({
  id,
  item,
  boxShadowType,
  marginRight,
  cardsRadius,
  cardsHeight,
  cardsWidth,
}) => {
  const boxShadow = BOX_SHADOWS[boxShadowType] || BOX_SHADOWS.none;
  const [clickedElement, setClickedElement] = useState();

  return (
    <div
      className={`awesome__card ${clickedElement === id ? "clicked" : ""}`}
      style={{
        boxShadow,
        marginRight,
        borderRadius: cardsRadius,
        height: cardsHeight,
        width: cardsWidth,
      }}
      onClick={() => {
        setClickedElement(id);
      }}
      onAnimationEnd={() => setClickedElement("")}
    >
      {item}
    </div>
  );
};

export default CarouselItem;

CarouselItem.propTypes = {
  cardsHeight: PropTypes.string.isRequired,
  cardsWidth: PropTypes.string.isRequired,
  item: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  boxShadowType: PropTypes.string,
  marginRight: PropTypes.string,
  fontSize: PropTypes.string,
};
