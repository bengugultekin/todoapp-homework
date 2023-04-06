import { setSearch } from "../redux/notes/searchSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>NotesApp</h1>
      <input
        className="searchInput"
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}

export default Header;
