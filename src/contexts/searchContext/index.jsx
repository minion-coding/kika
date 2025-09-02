import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

const CategoryContext = createContext();

const useSearch = () => {
  return useContext(SearchContext);
};

const useCategory = () => {
  return useContext(CategoryContext);
};

function SearchProvider({ children }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
      {children}
    </SearchContext.Provider>
  );
}

function CategoryProvider({ children }) {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export { useSearch, SearchProvider, useCategory, CategoryProvider };
