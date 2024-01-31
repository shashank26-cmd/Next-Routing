import React from 'react'

function page() {
  return (
    <div className="container "style={{ marginTop: '70px' }}>
      <h1 className="mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Our Address</h4>
          <p>123 Street, City, Country</p>
          <h4>Contact Information</h4>
          <p>Phone:8878451324</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default page