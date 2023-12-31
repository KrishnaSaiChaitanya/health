import React from "react";

const Navbar = () => {
  return (
    <nav
      id="nav-main"
      className="navbar navbar-expand-lg p-1 navbar-light xs:p-0 bg-white mx-5 xs:mx-0 sticky-top"
    >
      <div className="container-fluid md:mx-5">
        <div className="d-flex ">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="logo.svg"
              // height="60"
              style={{ width: "300px" }}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
        </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img src="logo.svg" height="55" alt="MDB Logo" loading="lazy" />
          </a> */}
          <ul className="navbar-nav  mb-2 mb-lg-0 px-4">
            <li className="nav-item px-2">
              <a className="nav-link" href="./">
                Main Page
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="./products">
                Special corner
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="./">
                Trend
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="./">
                search for services
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="./">
                About Us
              </a>
            </li>
            <li>
              <div class="container d-flex justify-content-center">
                <div class="input-group col-sm-4  input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text google">
                      <img src="search.svg" />
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    style={{
                      borderTopRightRadius: "30px",
                      borderBottomRightRadius: "30px",
                      width: "120px",
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="user.svg"
                className="rounded-circle"
                height="35"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
