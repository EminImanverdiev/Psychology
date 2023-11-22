import React from 'react'
import './style.css'
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

export default function ContactInfo() {
  return (<>
  <section id='contact-info'>
      <div className="container-fluid">
          <div className="row">
             <div className="col-xxl-4 col-md-6 col-xl-4">
                 <IoCallOutline className='contact-icon'/>
                 <h3>Call Us</h3>
                 <p> 1-800-123-4567</p>
             </div>
             <div className="col-xxl-4 col-md-6 col-xl-4">
                 <FaRegEdit className='contact-icon contact-icon-two'/>
                 <h3>Write Us</h3>
                 <p> psyche@co.com</p>
             </div>
             <div className="col-xxl-4 col-md-6 col-xl-4">
                 <CiLocationOn className='contact-icon contact-icon-tree'/>
                 <h3>Visit Us</h3>
                 <p> 2231 Sycamore Lake Road <br />
                  Green Bay, WI 54304</p>
             </div>
          </div>
      </div>
    </section>
    <section id='contact-map'>
        <div className="container-fluid">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.344947821261!2d49.85387287643863!3d40.37904685793137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d065b0441c7%3A0x5baa985ed4e4d63e!2s28th%20May%2C%20Baku!5e0!3m2!1sen!2saz!4v1700080007861!5m2!1sen!2saz" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  </>
    
  )
}
