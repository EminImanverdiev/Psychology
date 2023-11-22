import React from 'react'
import pic1 from "../../assets/images/pictureone.jpg"
import pic2 from '../../assets/images/picturetwo.jpg'
import '../Elementar/style.css'
export default function Elementar() {
    return (
        <section id='elementar'>
            <div className="container-fluid d-flex">
                <h2>We are</h2>
                <div className="row">
                    <div className="col-xxl-6 col-lg-8">
                        <p className='text-head'>Be smart</p>
                        <h1>Find your best short break</h1>
                        <p className='elementar-widget'>Morbi at felis in mauris vulputate feugiat dignissim in diam. <br /> Pellentesque sollicitudin hendrerit nisl, at aliquet est facilisis vel. <br /> Aliquam non accumsan libero. Mauris vehicula.</p>
                        <div className="box-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><title></title><g id="icomoon-ignore"></g><path d="M282.256 573.889c52.513 0 94.085 17.374 124.718 52.119 32.821 32.574 49.231 76.004 49.231 130.295 0 58.633-19.692 105.322-59.077 140.067-37.197 32.574-88.615 48.861-154.256 48.861-76.581 0-136.752-29.315-180.513-87.948-41.573-58.633-62.359-142.239-62.359-250.82 0-97.721 21.88-187.841 65.641-270.361 43.761-84.692 109.402-169.384 196.923-254.075 2.187-2.172 5.469-3.257 9.846-3.257 6.564 0 12.033 3.257 16.41 9.772s4.377 11.944 0 16.287c-107.214 108.579-160.821 236.702-160.821 384.371 0 60.805 10.94 105.322 32.821 133.551 19.692-32.574 60.171-48.861 121.436-48.861zM850.051 573.889c52.513 0 94.085 17.374 124.718 52.119 32.821 32.574 49.231 76.004 49.231 130.295 0 58.633-19.692 105.322-59.077 140.067-37.197 32.574-88.615 48.861-154.256 48.861-76.582 0-136.751-29.315-180.513-87.948-41.572-58.633-62.359-142.239-62.359-250.82 0-97.721 21.879-187.841 65.641-270.361 43.762-84.692 109.403-169.384 196.923-254.075 2.187-2.172 5.469-3.257 9.846-3.257 6.564 0 12.033 3.257 16.41 9.772s4.377 11.944 0 16.287c-107.213 108.579-160.821 236.702-160.821 384.371 0 60.805 10.941 105.322 32.821 133.551 19.692-32.574 60.172-48.861 121.436-48.861z"></path></svg>
                            <p>Duis autem vel eum iriure dolor in hendrerit <br /> in vulputate velit esse molestie consequat.</p>
                        </div>
                        <a href="#">Read More</a>
                    </div>
                    <div className="col-xxl-6 col-lg-4">
                        <img src={pic2} alt=""  className='firstpic'/>
                        <div className="picture-box">
                            <img src={pic1} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
