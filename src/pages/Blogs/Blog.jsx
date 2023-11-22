import React from 'react'
import BlogTablet from '../../components/BlogInfo/BlogTablet/BlogTablet'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import './style.css'
import Footer from '../../components/Footer/Footer'
export default function Blog() {
    const pageTitle = "Blog";
    return (
        <section id='blog'>
            <Navbar/>
            <Header  title={pageTitle}  />
            <div className="container-fluid blog-detail-container">
                <div className="row">
                    <div className="col-xxl-7">
                        <BlogTablet />
                    </div>
                    <div className="col-xxl-5">
                        <h1 className='port-header'>Portfolio</h1>
                        <div className="container-portf-pictures">
                            <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img19-600x600-1.jpg" alt="" />
                            <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img19-600x600-1.jpg" alt="" />
                            <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img19-600x600-1.jpg" alt="" />
                            <img src="https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img19-600x600-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section >
    )
}
