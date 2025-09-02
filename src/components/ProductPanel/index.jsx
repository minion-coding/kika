function ProductPanel({ title, category, price, stock }) {
  return (
    <div className="sm:w-3/5 border-l-2 border-gray-400">
      <div className="bg-gray-400 text-md font-bold py-5 px-3 text-gray-900">
        <h3>{title}</h3>
        <h3>{category}</h3>
      </div>
      <form className="pb-10 pl-5">
        <div className="flex items-center">
          <label className="text-xl text-end w-30 pr-5 py-5 font-semibold text-gray-900">
            Price:
          </label>
          <input
            className="bg-gray-400 rounded-xs px-5 py-1"
            type="button"
            value={"$" + price}
          />
        </div>
        <div className="flex items-center">
          <label className="text-xl text-end w-30 pr-5 py-5 font-semibold text-gray-900">
            Quantity:
            <span className="block text-base font-light text-gray-400">
              Stock: {stock}
            </span>
          </label>
          <input
            type="number"
            className="text-gray-900 text-base font-semibold"
            value={3}
            min={0}
            max={stock}></input>
        </div>
        <input
          className="bg-sky-500 hover:bg-sky-700 duration-300 ml-5 w-50 py-2 text-white rounded-xs shadow-md shadow-sky-500/50"
          type="submit"
          value={"Buy"}
        />
      </form>
    </div>
  );
}

export default ProductPanel;
