import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeSlider from '../../components/Home_slider/HomeSlider'
import Elementar from '../../components/Elementar/Elementar'
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Counter from '../../components/Counter/Counter'
import Consultation from '../../components/Consultation/Consultation'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'
import CommentSlider from '../../components/Home_slider/Comment_Slider/CommentSlider'

export default function Home() {
  return (
    <section id='home'>
        <Navbar/>
        <HomeSlider/>
        <Elementar/>   
        <Counter/>   
        <CommentSlider/>
        <Consultation/>  
        <Footer/>
    </section>
  )
}
