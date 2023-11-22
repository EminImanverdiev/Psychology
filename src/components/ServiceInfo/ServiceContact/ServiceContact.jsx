import React from 'react'
import './style.css'
export default function ServiceContact() {
  return (
    <section id='service-contact'>
        <div className="container-fluid">
               <div className="row">
                    <div className="col-xxl-6">
                         <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img33.png" alt="" />
                    </div>
                    <div className="col-xxl-6">
                        <div className="service-content-box">
                            <p className='title'>Consultation</p>
                            <h2>Have a questions?</h2>
                            <p className='content'>Enter your Name and Email to get my eBook for free! Consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <form action="">
                                <input type="text" placeholder='FullName'/>
                                <input type="email" placeholder='Email Address'/>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
               </div>
        </div>
    </section>
  )
}
