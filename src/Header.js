import React from 'react'
import logoreact from './logoreact.svg'
export default function () {
  return (
  <div>
    <nav className="navbar navbar-dark bg-dark">
        
        <div className="d-flex align-items-center">
          <div className="logo-container mr-3">
            <img
              src={logoreact}
              className="rounded-circle logo-img"
              alt="Coding School Logo"
              style={{ width: '60px', height: '60px' }}
            />
          </div>

          <a className="navbar-brand" href="#home">
            Coding School
          </a>
        </div>
        <div className="nav-item text-light">
        
            <a className="nav-link" href="#home">
              Home
            </a>
        </div>
        <div className="nav-item text-light">
            <a className="nav-link" href="#courses">
              Courses
            </a>
        </div>
        <div className="d-md-none d-lg-none d-xl-none mt-2">
          {/* The following row will stack on small screens */}
          <div className="row">
            <div className="col-6">
              <button className="btn btn-light btn-sm">Register</button>
            </div>
            <div className="col-6">
              <button className="btn btn-light btn-sm ml-2">Login</button>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <div class="row">
              <div class="col md-6"><button className="btn btn-light btn-sm">Register</button></div>
              <div class="col md-6"><button className="btn btn-light btn-sm ml-2">Login</button></div>
          </div>
          
          
        </div>

    </nav>
</div>

  )
}
