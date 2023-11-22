import React from 'react'
import './style.css'
export default function Header(props) {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-6">
            <p className='back-text'>We are<br/> highly<br/> sensitive</p>
            <div className="header-content">
              <h1>{props.title}</h1>
              <p className='content-text'><a href='#'> Home </a>  <span> / </span> <span> {props.title}</span></p>
            </div>
          </div>
          <div className="col-xxl-6">
          </div>
            <div className="overlay"></div>
        </div>
      </div>
    </header>
  )
}
