import { RiSearchLine } from "@remixicon/react";
import { useSearch } from "../../contexts/searchContext";

function SearchBox() {
  const { searchKeyword, setSearchKeyword } = useSearch();

  return (
    <div className="flex-1 flex items-center bg-white py-2 px-5 rounded-xl shadow-md">
      <input
        type="text"
        placeholder="Search to product"
        val={searchKeyword}
        className="flex-1 text-gray-700"
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}></input>
      <RiSearchLine size={24} color="gray" />
    </div>
  );
}

export default SearchBox;
