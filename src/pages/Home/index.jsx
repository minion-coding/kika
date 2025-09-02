import { SearchProvider } from "../../contexts/searchContext";
import Header from "../../apps/Header";
import Category from "../../components/Category";

//import mockup data
import { categories } from "../../mockups/vdata";

function Home() {
  return (
    <SearchProvider>
      <Header></Header>
      <Category items={categories} theme={"light"}></Category>
    </SearchProvider>
  );
}

export default Home;
