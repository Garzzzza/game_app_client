import React from "react"
import { Link, useLocation } from "react-router-dom"



const NavBar = () => {


    const location = useLocation();
    const currentPath = location.pathname;

    const getClassName = (path) => {
        return currentPath === path ? "PageTab active" : "PageTab";
    }

    return (
        <div className='NavBar'>

            <div className="PageTab">
            </div>

            <Link className={getClassName('/')} to='/'>Home</Link>
            <Link className={getClassName('/sign')} to='/sign'>Sign</Link>


        </div>

    )
}

export default NavBar