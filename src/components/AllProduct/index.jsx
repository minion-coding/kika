import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { useSearch } from "../../contexts/searchContext";

import Product from "../Product";

function AllProduct({ items }) {
  const { searchKeyword } = useSearch();
  return (
    <section>
      <div className="container mb-15 mx-auto">
        <div className="flex items-center bg-white px-3 py-2 shadow-lg">
          <h2 className="flex-1">All Product</h2>
          <div className="flex items-center">
            <h3>Sort by:</h3>
            <select className="inset-shadow-2xs w-30 mx-3 text-xs py-1 border-1 border-gray-300">
              <option>Price, low to high</option>
              <option>Price, high to low</option>
              <option>date, low to high</option>
              <option>date, high to low</option>
              <option>rate, low to high</option>
              <option>rate, high to low</option>
            </select>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-2">
          {items.map((val) => {
            if (
              val.title.toLowerCase().includes(searchKeyword) ||
              val.type.toLowerCase().includes(searchKeyword)
            ) {
              return <Product data={val} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

AllProduct.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AllProduct;
