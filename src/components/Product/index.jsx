import PropTypes from "prop-types";
import classNames from "classnames";

import { useEffect, useState, useRef, useContext } from "react";

function Product({ data }) {
  return (
    <article>
      <div>
        <img src={data.imgUrl}></img>
      </div>
      <p>{data.desc}</p>
      <p>{data.price}</p>
    </article>
  );
}

export default Product;
