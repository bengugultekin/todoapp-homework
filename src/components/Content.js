import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNew } from "../redux/notes/notesSlice";
import { setFilter } from "../redux/notes/filteredSlice";

function Content() {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(1);

  const colors = [0, 1, 2, 3, 4];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.replace(/ /g, "") === "") {
      return;
    }
    dispatch(addNew({ id: nanoid(), color: selectedColor, title }));
    setTitle("");
  };

  useEffect(() => {
    dispatch(setFilter(selectedColor));
  }, [selectedColor, dispatch]);

  return (
    <form onSubmit={handleSubmit} className="content">
      <textarea
        className="textArea"
        name=""
        id="textArea"
        cols="80"
        rows="20"
        placeholder="Choose color & Enter your note here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>

      <div className="toolbar">
        <div className="custom-radios">
          {colors.map((color, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`color-${color}`}
                name="color"
                value={`color-${color}`}
                checked={selectedColor === color}
                onChange={() => {
                  setSelectedColor(color);
                }}
              />

              <label htmlFor={`color-${color}`}>
                <span>
                  {color === 0 ? (
                    <div className="all">ALL</div>
                  ) : (
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                      alt="Checked Icon"
                    />
                  )}
                </span>
              </label>
            </div>
          ))}
        </div>
        <button disabled={selectedColor === 0} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default Content;
