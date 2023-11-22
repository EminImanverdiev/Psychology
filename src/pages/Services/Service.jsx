import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import ServiceTablet from '../../components/ServiceInfo/ServiceTablet/ServiceTablet'
import Footer from '../../components/Footer/Footer';

export default function Service() {
  const pageTitle = "Service";

  return (
    <section id='service'>
       <Navbar/>
       <Header  title={pageTitle}  />
       <ServiceTablet/>
       <Footer/>
    </section>
  )
}
