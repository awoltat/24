import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

const Header = ({setPageName}) => {
    return (
        <header>
            <button><Link to="/users">Users</Link></button>
            <button><Link to="/photos">Photos</Link></button>
            <button><Link to="/albums">Albums</Link></button>
        </header>
    );
};

export default Header;