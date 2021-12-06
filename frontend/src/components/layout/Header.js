import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { logout } from '../../actions/userActions';

import Search from './Search';

import '../../App.css';

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.');
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <div className="navbar-brand logo">
            <Link to="/">
              <img className="img-fluid" src="/images/universal_logo.webp" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ml-auto ">
              <div className="nav-item text-dark bg-warning p-1 shadow">
                <Link className="nav-link text-dark" to="/shop">
                  Classes
                </Link>
              </div>
              {/* <div className="nav-item text-dark bg-primary ml-2 p-1 shadow">
                <a href="blog.html" className="nav-link text-dark">
                  Adult-Classes
                </a>
              </div> */}
              <div className="nav-item bg-info ml-2 p-1 shadow">
                <Link className="nav-link text-dark" to="/teachers">
                  Teachers
                </Link>
              </div>
              <div className="nav-item bg-danger ml-2 p-1 shadow mr-5">
                <Link className="nav-link text-dark" to="/contact">
                  Contact
                </Link>
              </div>

              {/* <div className="nav-item">
                <Route render={({ history }) => <Search history={history} />} />
              </div> */}
              <div className="nav-item">
                <Link
                  to="/cart"
                  style={{ textDecoration: 'none' }}
                  className="nav-link"
                >
                  <span id="cart" className="text-dark">
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                  <span className="ml-1 " id="cart_count">
                    {cartItems.length}
                  </span>
                </Link>
              </div>

              {user ? (
                <div className="nav-item">
                  <div className=" dropdown  ">
                    <Link
                      to="#!"
                      className="btn dropdown-toggle text-dark mr-4"
                      type="button"
                      id="dropDownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ marginTop: '-3px' }}
                    >
                      <figure className="avatar avatar-nav ">
                        <img
                          src={user.avatar && user.avatar.url}
                          alt={user && user.name}
                          className="rounded-circle"
                        />
                      </figure>
                      <span>{user && user.name}</span>
                    </Link>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropDownMenuButton"
                    >
                      {user && user.role === 'admin' && (
                        <Link className="dropdown-item" to="/dashboard">
                          Dashboard
                        </Link>
                      )}
                      <Link className="dropdown-item" to="/orders/me">
                        Orders
                      </Link>
                      <Link className="dropdown-item" to="/me">
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item text-danger"
                        to="/"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                !loading && (
                  <div className="nav-item ml-2">
                    <Link
                      to="/login"
                      className="nav-link text-dark"
                      id="login_btn"
                    >
                      Login
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
