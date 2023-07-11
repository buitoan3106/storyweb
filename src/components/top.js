import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Top() {
  const [cate, setCate] = useState([]);
  const [user, setUser] = useState('');
  const [isAdmin, setIsAdmin] = useState(0);
  useEffect(() => {
    setUser(sessionStorage.getItem('username'));
    setIsAdmin(sessionStorage.getItem('isAdmin'));
  }, [])

  useEffect(() => {
    fetch('http://localhost:9999/category')
      .then(response => response.json())
      .then(json => setCate(json));
  }, [])

  function handleLogout() {
    sessionStorage.removeItem('username');
    window.location.replace("/")
  }
  return (
    <header className="header">
      <div className="container fluid Menu">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src={require("./image/logo.png")} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-7 header__menu mobile-menu">
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
              {
                (user && isAdmin == 1) ? (<li><NavLink to={'/admin/story'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Management</NavLink></li>) : ''
              }
            </ul>
          </div>
          <div className="col-lg-3">
            {user ? (
              <ul className="right">
                <li>Hello, {user} !!!</li>
                <li><i class="bi bi-bell-fill"></i></li>
                <li>
                  <button type="button" class="btn btn-primary" onClick={() => handleLogout()}>
                    Log out
                  </button>
                </li>
              </ul>) : (
              <ul className="right">
                <li>
                  <button type="button" class="btn btn-primary">
                    <Link to='/login'>Log In</Link>
                  </button>
                </li>
                <li><Link to='/register'>Sign Up</Link></li>
              </ul>)}
          </div>
        </div>
      </div>
    </header>
  );
}
