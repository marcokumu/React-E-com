import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div >


            <nav className="navbar bg-light fixed-top shadow" style={{color: "red"}} >
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <img src="carousel-pics/img.png" alt="logo" style={{ height: "70px", padding: "0px", width: "110px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;