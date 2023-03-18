import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNew } from "../redux/todos/todosSlice";

function Content() {
    const[title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNew({id: nanoid(), classid: '3', title}));
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="content">
            <textarea className="textArea" name="" id="textArea" cols="80" rows="20"
                placeholder="Enter your note here..." value={title} onChange={(e) => setTitle(e.target.value)}></textarea>

            <div className="toolbar">
                <div className="custom-radios">
                    <div>
                        <input type="radio" id="color-1" name="color" value="color-1" checked/>
                        <label htmlFor="color-1">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-2" name="color" value="color-2"/>
                        <label htmlFor="color-2">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-3" name="color" value="color-3"/>
                        <label htmlFor="color-3">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-4" name="color" value="color-4"/>
                        <label htmlFor="color-4">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                    alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                </div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

export default Content;