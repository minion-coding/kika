import PropTypes from "prop-types";
import classNames from "classnames";

function CategoryItem({ title, imgUrl, theme }) {
  return (
    <a
      className={classNames(
        "relative w-55 h-37 border-y-2 border-r-2 border-gray-500 flex flex-col px-10 py-2 hover:bg-gray-100"
      )}>
      <img src={imgUrl}></img>
      <p className="text-base font-medium text-center mt-2">{title}</p>
    </a>
  );
}

CategoryItem.PropTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default CategoryItem;
