import React from "react";

function Header() {
    return (
        <div className="header">
            <h1>NotesApp</h1>
            <input className="searchInput" type="text" placeholder="Search..."/>
        </div>
    );
}

export default Header;