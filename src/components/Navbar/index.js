import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
    const [search, setSearch] = useState(false)
    const submitSearch = (e) => {
        e.preventDefault();
        alert('Hello i am TynTyn. You searched <3');
    }
    const openSearch = () => {
        setSearch(true);
    }
    const searchClass = search ? "searchInput active" : "searchInput";
    return (
        <div className="navbar">
            <ul className='navbarMenu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/post/1'>Post</NavLink></li>
                <li><NavLink to='/contactMe'>Contact Me</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search Here" />
                    <img onClick={openSearch} className="searchIcon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-28.png" alt="Search" />
                </form>

            </div>
        </div>
    );
}

export default Navbar;
