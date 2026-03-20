import React from "react";
import { BOX_SHADOWS } from "./constants";

export default function CarouselItem({
  bg,
  item,
  boxShadowType,
  cardsRadius,
  cardsHeight,
  cardsWidth,
  fontSize,
}) {
  const boxShadow = BOX_SHADOWS[boxShadowType] || BOX_SHADOWS.none;

  return (
    <div
      className="awesome__card"
      style={{
        backgroundColor: bg,
        boxShadow,
        borderRadius: cardsRadius,
        height: cardsHeight,
        width: cardsWidth,
        fontSize,
      }}
    >
      {item}
    </div>
  );
}
