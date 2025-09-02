function ProductDesc({ data }) {
  return (
    <section>
      <div className="container mx-auto mb-20">
        <h2 className="bg-white pl-3 py-2 shadow-lg mb-3">Description</h2>
        <ul className="bg-white pt-3 pb-6 pl-3">
          {Object.keys(data).map((key) => {
            return (
              <li className="flex items-start justify-start text-gray-500 text-sm font-normal">
                <h5 className="text-end w-30 pr-5 first-letter:uppercase">{key}:</h5>
                <p className="text-wrap w-3/4">{data[key]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ProductDesc;
