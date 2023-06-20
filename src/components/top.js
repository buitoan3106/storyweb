import { Link, NavLink } from "react-router-dom";
export default function Top() {
    return (
        <header className="header">
            <div className="container fluid Menu">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="./home">
                                <img src={require("./image/logo.png")} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 header__menu mobile-menu">
                        <ul className="left">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Home</NavLink></li>
                            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>About Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul className="right">
                            <li><Link to='/login'>Log In</Link></li>
                            <li><Link to='/register'>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}