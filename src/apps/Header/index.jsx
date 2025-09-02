import SearchBox from "../../components/SearchBox";
import Navigation from "../Navigation";

function Header() {
  return (
    <header>
      <div className="container bg-primary text-white flex items-center justify-between h-20 mx-auto my-0">
        <a>
          <h1 className="mx-15 font-extrabold text-4xl text-shadow-lg">KIKA</h1>
        </a>
        <SearchBox />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
