import Header from "../../apps/Header";
import ProductDesc from "../../components/ProductDesc";
import ProductDetail from "../../components/ProductDetail";
import Footer from "../../layouts/Footer";

import { useCurrentPID } from "../../contexts/appContext";
import { useEffect, useState } from "react";
import { Fragment } from "react";

import { products } from "../../mockups/vdata";

function ProductPage() {
  const { cid } = useCurrentPID();
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  useEffect(() => {
    if (cid === null || products === null) {
      return;
    }
    products.map((val) => {
      if (val.id === cid) {
        setCurrentProduct(val);
      }
    });
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <ProductDetail product={currentProduct}></ProductDetail>
      <ProductDesc
        data={{
          category: currentProduct === null ? "" : currentProduct.category,
          details: currentProduct === null ? "" : currentProduct.desc,
        }}></ProductDesc>
      <Footer content={"Kika Company Cooperation"} contact={"01-123-456"} />
    </Fragment>
  );
}

export default ProductPage;
