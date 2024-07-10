import React from 'react'

export default function Header() {
  return (

    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Task Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/tithi-shah-032a11288/" target="_blank">More About Developer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Share This App with Others</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Theme
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i class="fa-regular fa-sun"></i> Light Mode</a></li>
                    <li><a className="dropdown-item" href="#"><i class="fa-solid fa-moon"></i> Dark Mode</a></li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#"><i class="fa-solid fa-circle-half-stroke"></i> Default View</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="User Review :)" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
