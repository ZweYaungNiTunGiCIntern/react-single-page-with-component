import React from 'react'
import java from './java.svg'
import python from './python.svg'
import bootstrap from './bootstrap-4.svg'
import logojavascript from './logo-javascript.svg'
import html from './html.svg'
export default function ServiceSection() {
  return (
    
    <div id="courses" className="container my-5">
    <h2 className="text-center mb-5">Our Courses</h2>
  
    <div className="row">
      {/* HTML Course */}
      <div className="col-md-6 mb-4">
        <div className="card shadow" style={{ maxWidth: '300px' }}>
          <img
            src={html}
            className="card-img-top img-fluid"
            alt="HTML Logo"
          />
          <div className="card-body text-center bg-dark text-light">
            <h5 className="card-title">HTML Course</h5>
            <p className="card-text">
              Learn the fundamentals of HTML for web development.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-2 mr-3">Register</button>
              <button className="btn btn-success mb-2">Review</button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Bootstrap Course */}
      <div className="col-md-6 mb-4">
        <div className="card shadow" style={{ maxWidth: '300px' }}>
          <img
            src={bootstrap}
            className="card-img-top img-fluid"
            alt="Bootstrap Logo"
          />
          <div className="card-body text-center bg-dark text-light">
            <h5 className="card-title">Bootstrap Course</h5>
            <p className="card-text">
              Explore the powerful features of Bootstrap for responsive design.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-2 mr-3">Register</button>
              <button className="btn btn-success mb-2">Review</button>
            </div>
          </div>
        </div>
      </div>
  
      {/* JavaScript Course */}
      <div className="col-md-6 mb-4">
        <div className="card shadow" style={{ maxWidth: '300px' }}>
          <img
            src={logojavascript}
            className="card-img-top img-fluid"
            alt="JavaScript Logo"
          />
          <div className="card-body text-center bg-dark text-light">
            <h5 className="card-title">JavaScript Course</h5>
            <p className="card-text">
              Dive into the world of JavaScript for dynamic web applications.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-2 mr-2">Register</button>
              <button className="btn btn-success mb-2">Review</button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Java Course */}
      <div className="col-md-6 mb-4">
        <div className="card shadow" style={{ maxWidth: '300px' }}>
          <img
            src={java}
            className="card-img-top img-fluid"
            alt="Java Logo"
          />
          <div className="card-body text-center bg-dark text-light">
            <h5 className="card-title">Java Course</h5>
            <p className="card-text">
              Learn Java programming for versatile application development.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-2 mr-2">Register</button>
              <button className="btn btn-success mb-2">Review</button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Python Course */}
      <div className="col-md-6 mb-4">
        <div className="card shadow" style={{ maxWidth: '300px' }}>
          <img
            src={python}
            className="card-img-top img-fluid"
            alt="Python Logo"
          />
          <div className="card-body text-center bg-dark text-light">
            <h5 className="card-title">Python Course</h5>
            <p className="card-text">
              Master Python for various applications, including web development and data science.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-2 mr-2">Register</button>
              <button className="btn btn-success mb-2">Review</button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>
  


  
  )
}
