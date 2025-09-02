import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

import { useEffect, useState, useRef } from "react";

function Category({ items, theme }) {
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0); // Store content width in state
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastDragPosition, setLastDragPosition] = useState(0);

  useEffect(() => {
    const updateContentWdith = () => {
      if (contentRef.current && containerRef.current) {
        const w =
          containerRef.current.offsetWidth - contentRef.current.offsetWidth;
        setContentWidth(w);
      }
    };

    updateContentWdith();

    window.addEventListener("resize", updateContentWdith);

    return () => {
      window.removeEventListener("resize", updateContentWdith);
    };
  }, []);

  const handlePanStart = (event) => {
    if (event.type === "touchstart") {
      const touchEvent = event.nativeEvent;
      const touchX = touchEvent.touches[0].clientX;
      setIsDragging(true);
      setLastDragPosition(touchX);
    }
  };

  const handlePanMove = (event) => {
    if (event.type === "touchmove" && isDragging) {
      const touchEvent = event.nativeEvent;
      const touchX = touchEvent.touches[0].clientX;
      const deltaX = touchX - lastDragPosition;
      setLastDragPosition(touchX);

      // Calculate the new translateX value
      let newTranslateX = translateX + deltaX * 0.5;

      // Adjust limits
      if (newTranslateX > 0) {
        newTranslateX = 0;
      } else if (newTranslateX < contentWidth) {
        newTranslateX = contentWidth;
      }

      setTranslateX(newTranslateX);
    }
  };

  const handlePanEnd = (event) => {
    if (event.type === "touchend" || event.type === "touchcancel") {
      setIsDragging(false);
    }
  };

  const handleClick = (link) => {
    console.log("✔" + link);
  };

  return (
    <div className="my-8 bg-white shadow-lg">
      <h2 className="py-2 ml-3">Category</h2>
      <div
        className="overflow-hidden w-full touch-pan-x"
        ref={containerRef}
        onTouchStart={handlePanStart}
        onTouchMove={handlePanMove}
        onTouchCancel={handlePanEnd}
        onTouchEnd={handlePanEnd}>
        <ul
          className="flex w-fit"
          ref={contentRef}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.3s ease",
          }}>
          {items.map(({ key, title, imgUrl, link }) => {
            return (
              <li key={key} onClick={() => handleClick(link)}>
                <CategoryItem title={title} imgUrl={imgUrl} theme={theme} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Category.PropTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Category;
