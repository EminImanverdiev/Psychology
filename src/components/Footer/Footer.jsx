import React from 'react'
import logo from '../../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import p1 from './../../assets/images/p1.jpg'

import './style.css'
export default function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-3 col-md-6 col-xl-4">
                        <div className="logo-box">
                            <div className="box-content">
                                <img className='logo' src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/logo-footer.png" alt="" />
                                <p>Mauris sit amet erat nisl. Sed leo metus, consectetur eget egestas et, auctor potenti consectetur.</p>
                                <div className="foot-social-icons">
                                    <a href="#">< FaFacebookF className='foot-icon' /></a>
                                    <a href="#">< FaTwitter className='foot-icon' /></a>
                                    <a href="#">< FaLinkedin className='foot-icon' /></a>
                                    <a href="#">< FaWhatsapp className='foot-icon' /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6 col-xl-4">
                        <div className="box-content box-kind-therapy">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Depression therapy</a></li>
                                <li><a href="#">Individual therapy</a></li>
                                <li><a href="#">Children therapy</a></li>
                                <li><a href="#">Anti-Stress therapy</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-xxl-3 col-md-6 col-xl-4">
                    <div className="box-content">
                            <h3>Our Contacts</h3>
                            <ul>
                                <li> <IoLocationOutline className='foot-icon'/> <span>2231 Sycamore Lake Road Green Bay</span> </li>
                                <li> <MdCall className='foot-icon'/> <span>1-800-123-4567</span></li>
                                <li> <CiMail className='foot-icon'/> <span>psycheco@support.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6 col-xl-4">
                    <div className="box-content">
                            <h3>Our Portfolio</h3>
                             <div className="box-content-portfolio">
                                <img src={p1} alt="" />
                                <img src={p1} alt="" />
                                <img src={p1} alt="" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
