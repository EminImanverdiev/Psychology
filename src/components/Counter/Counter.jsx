import React, { useState } from 'react'
import '../Counter/style.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import appoinmentpic from '../../assets/images/appointment.png'
import { FaPhoneAlt } from "react-icons/fa";
export default function Counter() {
    const [counteron, SetCounterOn] = useState(false);
    return (
        <>
            <section id='counter'>
                <div className="container-fluid">
                    <ScrollTrigger onEnter={() => SetCounterOn(true)} onExit={() => SetCounterOn(false)}>
                        <div className="row">
                            <p>Psychology</p>
                            <h1>We are in numbers</h1>
                            <div className="col-xxl-3 col-md-6 col-lg-4 counter-border-box">
                                <h2> {counteron && <CountUp start={0} end={100} duration={3} delay={0} />} +</h2>
                                <p>Years of Experience</p>
                            </div>
                            <div className="col-xxl-3 col-md-6 col-lg-4 counter-border-box">
                                <h2> {counteron && <CountUp start={0} end={89} duration={3} delay={0} />}</h2>
                                <p>In-House Doctors</p>
                            </div>
                            <div className="col-xxl-3 col-md-6 col-lg-4 counter-border-box">
                                <h2> {counteron && <CountUp start={0} end={561} duration={3} delay={0} />} +</h2>
                                <p>Successful Therapy</p>
                            </div>
                            <div className="col-xxl-3 col-md-6 col-lg-4">
                                <h2> {counteron && <CountUp start={0} end={12} duration={3} delay={0} />}</h2>
                                <p>Medical Branches</p>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </section>
            <section id='appointment'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                            <img src={appoinmentpic} alt="" />
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <p>Psychology</p>
                            <h1>Find your best short</h1>
                            <p> <strong>Proin elit enim, consectetur sit amet massa ac, facilisis convallis mi. <br /> Sed fringilla</strong> <br />
                               <br /> Morbi at felis in mauris vulputate feugiat dignissim in diam. <br /> Pellentesque sollicitudin hendrerit nisl, at aliquet est facilisis <br /> vel. Aliquam non accumsan libero. Mauris vehicula.</p>
                            <div className="inp-box">
                                <FaPhoneAlt className='phone-icon'/>
                                <input type="text" placeholder='Phone'/>
                            </div>
                            <a href="#" className='link'> Appointment</a>
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}
