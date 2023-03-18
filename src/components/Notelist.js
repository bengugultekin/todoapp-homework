import React from "react";
import { useSelector } from "react-redux";

function Notelist () {
    const items = useSelector(state => state.todos.items);
    console.log(items);
    return (
        <ul className="notelist">
            {/* <li className="note note1">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nihil quia modi temporibus quibusdam aut, amet rerum placeat, dolorum porro nam harum vel hic? A cupiditate modi magnam enim expedita!
            </li>
            <li className="note note2">
                Lorem ipsum dolor sit amet.
            </li>
            <li className="note note3">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa distinctio at architecto quis nam asperiores error aperiam unde, possimus voluptatem, veniam est tempore doloremque quam iusto. Quo, necessitatibus asperiores! Voluptate similique assumenda facilis dolor repellendus itaque? Recusandae alias consequuntur repellat officia distinctio et, quidem vitae reiciendis fugit, natus culpa. Sed.
            </li>
            <li className="note note4">
                Lorem ipsum dolor sit amet.
            </li>       */}
            {
                items.map((item) => (
                    <li key={item.id} className={`note note${item.classid}`}>
                    
                        {item.title}
                    </li>
                ))
            }
        </ul>
    );
}

export default Notelist;