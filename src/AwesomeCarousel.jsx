import React,{ useRef, useState } from "react";
import PropTypes from "prop-types";
import ChevronLeft from "./jsxIcons/ChevronLeft";
import CarouselItem from "./CarouselItem";
import "./index.css"
function AwesomeCarousel({
  items,
  itemsGap,
  fontSize,
  cardsWidth,
  cardsHeight,
  cardsRadius,
  boxShadowType,
  cardBackgroundColor
}) {
  const scrollableRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const carouselItems = items.map((item, i) => ({
    id: i,
    item,
  }));

  const handleScroll = (type) => {
    if (scrollableRef.current) {
      const scrollWidth = scrollableRef.current.scrollWidth;
      const clientWidth = scrollableRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const newPosition =
        type === "+"
          ? Math.min(maxScroll, scrollPosition + 100)
          : Math.max(0, scrollPosition - 100);
      setScrollPosition(newPosition);
      scrollableRef.current.scrollLeft = newPosition;
    }
  };

  return (
    <aside className="awesome-carousel">
      <div className={`awesome__chevron`} onClick={() => handleScroll("-")}>
        <ChevronLeft width={20} height={20} />
      </div>

      <div
        className={`awesome__chevron right`}
        onClick={() => handleScroll("+")}
      >
        <ChevronLeft width={20} height={20} />
      </div>
      <section className="awesome__card-wrapper" ref={scrollableRef}>
        {carouselItems.map(({ id, item }) => (
          <CarouselItem
            id={id}
            key={id}
            item={item}
            fontSize={fontSize}
            marginRight={itemsGap}
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

export default AwesomeCarousel;

AwesomeCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  cardsHeight: PropTypes.string.isRequired,
  cardsWidth: PropTypes.string.isRequired,
  cardBackgroundColor: PropTypes.string,
  boxShadowType: PropTypes.string,
  cardsRadius: PropTypes.string,
  itemsGap: PropTypes.string,
  fontSize: PropTypes.string,
};

AwesomeCarousel.defaultProps = {
  cardsRadius: ".5rem",
  boxShadowType: "none",
  itemsGap: "1rem",
  cardsHeight: "100px",
  cardsWidth: "100px",
  fontSize: "1rem",
  cardBackgroundColor: "#fff",
};
