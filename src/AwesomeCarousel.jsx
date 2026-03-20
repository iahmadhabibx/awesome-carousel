import React, { useCallback, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import "./index.css";

function ChevronIcon({ flipped }) {
  return (
    <svg
      className="awesome__chevron-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
      style={flipped ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AwesomeCarousel({
  items,
  itemsGap = "1rem",
  fontSize = "1rem",
  cardsWidth,
  cardsHeight,
  cardsRadius = "0.75rem",
  boxShadowType = "none",
  cardBackgroundColor = "#fff",
}) {
  const scrollableRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const syncScroll = useCallback(() => {
    const el = scrollableRef.current;
    if (el) setScrollPosition(el.scrollLeft);
  }, []);

  const scrollByDirection = (direction) => {
    const el = scrollableRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const step = Math.max(120, Math.round(el.clientWidth * 0.85));
    const next =
      direction === "next"
        ? Math.min(maxScroll, scrollPosition + step)
        : Math.max(0, scrollPosition - step);
    setScrollPosition(next);
    el.scrollLeft = next;
  };

  return (
    <aside
      className="awesome-carousel"
      aria-roledescription="carousel"
      style={{ "--ac-item-gap": itemsGap }}
    >
      <button
        type="button"
        className="awesome__chevron"
        aria-label="Previous items"
        onClick={() => scrollByDirection("prev")}
      >
        <ChevronIcon />
      </button>

      <button
        type="button"
        className="awesome__chevron awesome__chevron--right"
        aria-label="Next items"
        onClick={() => scrollByDirection("next")}
      >
        <ChevronIcon flipped />
      </button>

      <section
        className="awesome__card-wrapper"
        ref={scrollableRef}
        onScroll={syncScroll}
        tabIndex={0}
        aria-label="Carousel items"
      >
        {items.map((item, id) => (
          <CarouselItem
            key={id}
            item={item}
            fontSize={fontSize}
            cardsWidth={cardsWidth}
            bg={cardBackgroundColor}
            cardsRadius={cardsRadius}
            cardsHeight={cardsHeight}
            boxShadowType={boxShadowType}
          />
        ))}
      </section>
    </aside>
  );
}
