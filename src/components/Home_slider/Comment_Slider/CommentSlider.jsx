import React from 'react'
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
export default function CommentSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id='comment-slider'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-4"></div>
          <div className="col-xxl-8"></div>
        </div>
          <div className="carousel-comment">
          <Slider {...settings}>
            <div className="carousel-card">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam eum sequi, doloribus cumque nisi doloremque optio esse quasi temporibus, officiis quis, vel reiciendis ducimus consequatur! Aliquam repellendus pariatur vitae.</p>
              <div className="carousel-bottom">
                <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img50.jpg" alt="" />
                <div className="carousel-bottom-right">
                   <h4>Cameron Williamson</h4>
                   <p>Customer</p>
                </div>
            </div>
            </div>
            <div className="carousel-card">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam eum sequi, doloribus cumque nisi doloremque optio esse quasi temporibus, officiis quis, vel reiciendis ducimus consequatur! Aliquam repellendus pariatur vitae.</p>
              <div className="carousel-bottom">
                <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img50.jpg" alt="" />
                <div className="carousel-bottom-right">
                   <h4>Cameron Williamson</h4>
                   <p>Customer</p>
                </div>
            </div>
            </div>
            <div className="carousel-card">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam eum sequi, doloribus cumque nisi doloremque optio esse quasi temporibus, officiis quis, vel reiciendis ducimus consequatur! Aliquam repellendus pariatur vitae.</p>
              <div className="carousel-bottom">
                <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img50.jpg" alt="" />
                <div className="carousel-bottom-right">
                   <h4>Cameron Williamson</h4>
                   <p>Customer</p>
                </div>
            </div>
            </div>
            <div className="carousel-card">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam eum sequi, doloribus cumque nisi doloremque optio esse quasi temporibus, officiis quis, vel reiciendis ducimus consequatur! Aliquam repellendus pariatur vitae.</p>
              <div className="carousel-bottom">
                <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img50.jpg" alt="" />
                <div className="carousel-bottom-right">
                   <h4>Cameron Williamson</h4>
                   <p>Customer</p>
                </div>
            </div>
            </div>
            <div className="carousel-card">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam eum sequi, doloribus cumque nisi doloremque optio esse quasi temporibus, officiis quis, vel reiciendis ducimus consequatur! Aliquam repellendus pariatur vitae.</p>
              <div className="carousel-bottom">
                <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img50.jpg" alt="" />
                <div className="carousel-bottom-right">
                   <h4>Cameron Williamson</h4>
                   <p>Customer</p>
                </div>
            </div>
            </div>
            <div className="carousel-card">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam eum sequi, doloribus cumque nisi doloremque optio esse quasi temporibus, officiis quis, vel reiciendis ducimus consequatur! Aliquam repellendus pariatur vitae.</p>
              <div className="carousel-bottom">
                <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img50.jpg" alt="" />
                <div className="carousel-bottom-right">
                   <h4>Cameron Williamson</h4>
                   <p>Customer</p>
                </div>
            </div>
            </div>
          </Slider>
        </div>
     
      </div>
    </section>
  )
}
