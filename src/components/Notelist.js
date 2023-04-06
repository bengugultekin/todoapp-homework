import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroy } from "../redux/notes/notesSlice";

function Notelist() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.notes.items);
  const color = useSelector((state) => state.filtered.color);
  const search = useSelector((state) => state.search.value);
  const notes = items.filter((item) => {
    const isSearch = !!search;
    const matched = isSearch && item.title.indexOf(search) > -1;

    // Long term

    /*  if (color === 0) {
            if (isSearch) {
                if (matched) return true
                else return false;
             }
             else return true
        }
        else {
            if (item.color === color) {
                if (isSearch) {
                    if (matched) return true
                    else return false;
                }
                else return true;
             }
             else return false;
        }*/

    // Short term
    return color === 0
      ? isSearch
        ? matched
          ? true
          : false
        : true
      : item.color === color
      ? isSearch
        ? matched
          ? true
          : false
        : true
      : false;
  });

  return (
    <ul className="notelist">
      {notes.length > 0 ? (
        notes.map((item) => (
          <li key={item.id} className={`note note${item.color}`}>
            {item.title}
            <button
              className="destroy"
              onClick={() => dispatch(destroy(item.id))}
            ></button>
          </li>
        ))
      ) : (
        <li className="empty">There is no notes in this color.</li>
      )}
    </ul>
  );
}

export default Notelist;
