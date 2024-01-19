import React from 'react'
import logo from './logo.jpg'
export default function ImageTextSection() {
  return (
    <div>
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <img src={logo} className="img-fluid rounded" alt="School Image" />
        </div>
        <div className="col-lg-6">
          <h2 className="font-weight-bold mb-4">Welcome to Coding School</h2>
          <p className="lead">
            Unlock the boundless world of coding at our premier coding school! We offer a diverse range of courses, equipping students with essential programming skills. Our expert instructors provide hands-on training in HTML, CSS, JavaScript, Python, and more. Whether you're a beginner or seeking advanced knowledge, our tailored curriculum ensures a seamless learning experience. Join a vibrant community of aspiring coders, where collaboration and innovation thrive.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}
