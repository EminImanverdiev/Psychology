import React,{useState} from 'react'
import './style.css'
import ConsultationPic from '../../assets/images/Consultation.jpg'

export default function Consultation() {
    return (
        <section id='consultation'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6">
                        <img src={ConsultationPic} alt="" />
                    </div>
                    <div className="col-xxl-6 col-xl-6">
                        <p className='consul-title'>Consultation</p>
                        <h1>Get a consultation</h1>
                        <p className='consul-content'>Enter your Name and Email to get my eBook for free! Consetetur <br /> sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        <form action="">
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email Address' />
                            <input type="text" placeholder='Your Subject' />
                            <input type="text" placeholder='Phone Number' />
                            <input type="date" placeholder='Date' />
                            <select id="options" name="options">
                                <option value="option" selected disabled>Time</option>
                                <option value="option1">10:40</option>
                                <option value="option2">11:40</option>
                                <option value="option3">12:40</option>
                            </select>
                            <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="Send" />
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
