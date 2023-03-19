import React from "react";
import { useSelector } from "react-redux";

function Notelist () {
    const items = useSelector(state => state.notes.items);
    const color = useSelector(state => state.filtered.color);
    const notes = items.filter(item => color === 0 ? true : item.color === color);

    return (
        <ul className="notelist">
            
            {
                notes.length > 0 ? 
                    notes.map((item) => (
                        <li key={item.id} className={`note note${item.color}`}>
                            {item.title}
                        </li>
                    ))
                :(
                    <li className="empty">
                        There is no notes in this color.
                    </li>
                )
                
            }

        </ul>
    );
}

export default Notelist;