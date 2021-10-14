import React from 'react';
import './style.css';
const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="/">Home</a>
                <a href="/post">Post</a>
                <a href="/ContactMe">Contact Me</a>
            </nav>
            <div className="icon">
                <ul>
                    <li><a target='blank_' href="https://www.facebook.com/profile.php?id=100020679831595"><i className="fa fa-facebook"></i></a></li>
                    <li><a target='blank_' href="https://twitter.com/Lifter88722170"><i className="fa fa-twitter"></i></a></li>
                    <li><a target='blank_' href="https://www.instagram.com/manhtuyen1910/"><i className="fa fa-instagram"></i></a></li>
                    <li><a target='blank_' href="https://www.linkedin.com/in/nguy%E1%BB%85n-tuy%C3%AAn-2a90a1222/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
