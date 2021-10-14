import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">

                    <div className="noi-dung about">
                        <h2>My Social Network </h2>
                        <p></p>
                        <ul className="social-icon">
                            <li><a target='blank_' href="https://www.facebook.com/profile.php?id=100020679831595"><i className="fa fa-facebook"></i></a></li>
                            <li><a target='blank_' href="https://twitter.com/Lifter88722170"><i className="fa fa-twitter"></i></a></li>
                            <li><a target='blank_' href="https://www.instagram.com/manhtuyen1910/"><i className="fa fa-instagram"></i></a></li>
                            <li><a target='blank_' href="https://www.linkedin.com/in/nguy%E1%BB%85n-tuy%C3%AAn-2a90a1222/"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>

                    <div className="noi-dung links">
                        <h2>Đường Dẫn</h2>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/post/1'>Post</NavLink></li>
                            <li><NavLink to='/contactUs'>Contact Me</NavLink></li>
                        </ul>
                    </div>

                    <div className="noi-dung contact">
                        <h2>Thông Tin Liên Hệ</h2>
                        <ul className="info">
                            <li>
                                <span><i className="fa icon-black fa-map-marker"></i></span>
                                <span>Đường Tân Triều<br />
                                    Huyện Thanh Trì, Hà Nội<br />
                                    Việt Nam</span>
                            </li>
                            <li>
                                <span><i className="fa icon-black fa-phone"></i></span>
                                <p><a href="#">+84 396522431</a>
                                    <br />
                                </p>
                            </li>
                            <li>
                                <span><i className="fa icon-black fa-envelope"></i></span>
                                <p><a href="#">Tuyenlom2000@gmail.com</a></p>
                            </li>
                            <li>
                                <form className="form">
                                    <input type="email" className="form__field" placeholder="Đăng Ký Subscribe Email" />
                                    <button type="button" className="btn btn--primary  uppercase">Gửi</button>
                                </form>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Footer;
