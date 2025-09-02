import PropTypes from "prop-types";
import classNames from "classnames";

const Menu = ({ items, mode, theme, selectedKey, handleClick }) => {
  return (
    <ul
      className={classNames("flex justify-between items-center gap-8", {
        "flex-row": mode === "inline",
        "flex-col": mode !== "inline",
      })}
      role="menu">
      {items.map(({ key, title }) => (
        <li
          key={key}
          className={classNames(
            "font-medium text-lg text-white transition-all duration-300",
            {
              "underline underline-offset-4": key === selectedKey,
              "hover:text-primary": theme === "dark",
              "hover:text-gray-500": theme !== "dark",
            }
          )}
          role="menuitem"
          tabIndex={0} // Make the item focusable
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick(key);
            }
          }}
          onClick={() => handleClick(key)}>
          <a>{title}</a>
        </li>
      ))}
    </ul>
  );
};

// PropTypes for type-checking
Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  mode: PropTypes.oneOf(["inline", "vertical"]).isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  selectedKeys: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
