import { SearchProvider } from "../../contexts/searchContext";
import { ThemeProvider } from "../../contexts/themeContext";
import Header from "../../apps/Header";
import Category from "../../components/Category";

//import mockup data
import { categories, products } from "../../mockups/vdata";
import AllProduct from "../../components/AllProduct";
import Footer from "../../layouts/Footer";

function Home() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Header></Header>
        <Category items={categories} theme={"light"}></Category>
        <AllProduct items={products} />
        <Footer content={"Kika Company Cooperation"} contact={"01-123-456"} />
      </SearchProvider>
    </ThemeProvider>
  );
}

export default Home;
