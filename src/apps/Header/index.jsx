import SearchBox from "../../components/SearchBox";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container flex items-center justify-between h-20 px-5 mx-auto my-0">
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
