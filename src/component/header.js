import React from "react";
import "../css/header.css"
import { Link } from "react-router-dom"
function header() {
    return (
        <div className="header">
            <div className="homeLink"><Link to="/">Home</Link></div>
            <div className="favouriteLink"><Link to="/favourite">Favourite</Link></div>
        </div>
    )
}
export default header;