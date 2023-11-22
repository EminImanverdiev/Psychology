import React from 'react'
import ReactDom from 'react-dom/client'
import '../Navbar/style.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
export default function Navbar() {
    return (
        <section id='navbar'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                  <div className="logo-box">
                     <img src={logo} alt="" />
                     <span className='logo-text'>Psyche<span>Go</span></span>
                  </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-link-container" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <button className='navbar-appointment'>Appointment</button>
                    </div>
                </div>
            </nav>
        </section>
    )
}
