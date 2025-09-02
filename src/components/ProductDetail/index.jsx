import ProductPanel from "../ProductPanel";

function ProductDetail({ product }) {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <h2 className="bg-white pl-3 py-2 mt-5 shadow-lg">
            {product.category + " > " + product.title}
          </h2>
          <div className="bg-white shadow-lg mt-3 mb-8 flex flex-col sm:flex-row border-b-2 border-gray-400">
            <img src={product.imgUrl} className="md:w-2/5 py-5 px-3 object-contain"></img>
            <ProductPanel
              price={product.price}
              title={product.title}
              category={product.category}
              stock={product.stock}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
