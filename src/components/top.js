import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Top() {
<<<<<<< HEAD
  return (
    <header className="header">
      <div className="container fluid Menu">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="/">
                <img src={require("./image/logo.png")} alt="" />
              </a>
=======
    const [cate, setCate] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9999/category')
            .then(response => response.json())
            .then(json => setCate(json));
    }, [])
    return (
        <header className="header">
            <div className="container fluid Menu">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="./">
                                <img src={require("./image/logo.png")} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 header__menu mobile-menu">
                        <ul className="left">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Home</NavLink></li>
                            <li><Link to='/categories'>Categories  <span><i className="bi bi-chevron-down" /></span></Link>
                                <ul class="dropdown">
                                    {
                                        cate.map(c => (
                                            <li><Link to={'/category/' + c.categoryName}>{c.categoryName}</Link></li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>About Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul className="right">
                            <li>
                                <button type="button" class="btn btn-primary">
                                    <Link to='/login'>Log In</Link>
                                </button>
                            </li>
                            <li><Link to='/register'>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
>>>>>>> 1fa57f696b9323e2bd074205178aa429e0d41aea
            </div>
          </div>
          <div className="col-lg-8 header__menu mobile-menu">
            <ul className="left">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <Link to="/category">
                  Categories{" "}
                  <span>
                    <i className="bi bi-chevron-down" />
                  </span>
                </Link>
                <ul class="dropdown">
                  <li>
                    <Link to="/">Hành động</Link>
                  </li>
                  <li>
                    <Link to="/">Hài hước</Link>
                  </li>
                  <li>
                    <Link to="/">Ngôn tình</Link>
                  </li>
                  <li>
                    <Link to="/">Kinh dị</Link>
                  </li>
                  <li>
                    <Link to="/">Viễn tưởng</Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className="right">
              <li>
                <button type="button" class="btn btn-primary">
                  <Link to="/login">Log In</Link>
                </button>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
