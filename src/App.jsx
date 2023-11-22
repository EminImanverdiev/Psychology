import React from 'react'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Service from './pages/Services/Service'
import ServiceDetail from './components/ServiceInfo/ServiceDetail/ServiceDetail'
import Blog from './pages/Blogs/Blog'
import './../src/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetail from './components/BlogInfo/BlogDetail/BlogDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
