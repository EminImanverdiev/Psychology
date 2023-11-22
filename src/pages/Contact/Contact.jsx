import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Consultation from '../../components/Consultation/Consultation'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
  const pageTitle = "Contact";
  return (
    <section id='contact'>
      <Navbar/>
      <Header  title={pageTitle}  />
      <ContactInfo/>
      <Consultation/>
      <Footer/>
    </section>
  )
}
