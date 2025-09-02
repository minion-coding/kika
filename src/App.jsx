import "./App.css";
import { CurrentPIDProvider } from "./contexts/appContext";
import { SearchProvider } from "./contexts/searchContext";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <CurrentPIDProvider>
      <SearchProvider>
        <ProductPage></ProductPage>
      </SearchProvider>
    </CurrentPIDProvider>
  );
}

export default App;
