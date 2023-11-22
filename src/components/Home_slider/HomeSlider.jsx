import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../Home_slider/style.css'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiOutlineTwitter,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'
export default function HomeSlider() {
  const datas = [
    { id: 1, image: "https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/Slide_Man_1-1.png" },
    { id: 2, image: "https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/Slide_Man_2.png" },
    { id: 3, image: "https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/Slide_Man_3.png" },
  ]
  return (
    <section id='home-slider'>
      <div className="slider-main">
        <div className="slider-main-left"></div>
        <div className="slider-main-right">
          <div className="slider-main-right-content">
            <p className='text-head'>Psychology</p>
            <h1>Be smart and help <br /> yourself now</h1>
            <p className='text-content'>Maecenas sagittis accumsan eleifend. Etiam vestibulum, orci at <br /> luctus scelerisque, lectus libero fringilla massa</p>
            <a href="#" className='order-btn'>Order Now</a>
          </div>
          <div className="slider-main-right-icon">
            <a href="#"><BiLogoFacebookCircle/></a> <br />
            <a href="#"><AiOutlineWhatsApp/></a> <br />
            <a href="#"><AiFillLinkedin/></a> <br />
            <a href="#"><AiOutlineTwitter/></a>
          </div>

        </div>
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className='swiper-slider'
      >
        {
          datas.map((data, index) => (
            <SwiperSlide key={index}>
              <img src={data.image}
                className='slide-item' />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </section>
  )
}
