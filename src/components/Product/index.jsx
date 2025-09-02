import PropTypes from "prop-types";
import classNames from "classnames";

// import { useEffect, useState, useContext } from "react";
import { useTheme } from "../../contexts/themeContext";

function Product({ data }) {
  const { theme } = useTheme();

  return (
    <article className="flex flex-col justify-center text-start shadow-md/40">
      <div
        className={classNames("w-full flex justify-center items-center py-8", {
          "bg-gray-500": theme === "light",
          "bg-gray-200": theme === "dark",
        })}>
        <img src={data.imgUrl} onClick={() => setIsFullScreen(true)}></img>
      </div>
      <p className="px-5 mt-2 text-xs text-gray-900 font-bold">{data.title}</p>
      <p className="px-5 mb-5 text-xs text-gray-900 font-bold">{data.type}</p>
      <p className="px-5 mb-1 text-sm text-gray-700 font-medium text-end">${data.price}</p>
    </article>
  );
}

export default Product;
