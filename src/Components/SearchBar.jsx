
import search from "/search.svg";
import hamburger from "/hamburger.svg";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-ham">
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search..." />
      </div>
      <img src={hamburger} alt="hamburger" className="ham" />
    </div>
  );
}
