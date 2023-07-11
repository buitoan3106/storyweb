import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Top() {
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
              <li><NavLink to={'/findingresult'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Search</NavLink></li>
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
      </div>
    </header>
  );
}
