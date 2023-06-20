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
                            <li>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signInModal">
                                    Sign In
                                </button>


                                <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="signInModalLabel">Sign In</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div className="form">
                                                    <form>

                                                        <div class="form-outline">
                                                            <label class="form-label" for="email1">Email address</label>
                                                            <input type="email" id="email1" class="form-control" />
                                                        </div>


                                                        <div class="form-outline">
                                                            <label class="form-label" for="password1">Password</label>
                                                            <input type="password" id="password1" class="form-control" />
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary">Log in</button>
                                                            <Link to='/register'>Sign Up</Link>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></li>
                            <li><Link to='/register'>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}