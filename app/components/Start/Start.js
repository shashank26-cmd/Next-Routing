import React from 'react';
import Image from 'next/image';
import aboutMainImage from "/app/assets/aboutMainImage.png"

function Start() {
  return (
    <div className='bg-warning '>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <div className="text-left"style={{ marginTop:"170px"}}>
              <h1 className="display-2">Welcome to My Website</h1>
              <p className="lead">Explore and discover amazing content!</p>
              <a href='/About'>
                <button className="btn btn-primary btn-lg">Get Started</button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <Image src={aboutMainImage} className="img-fluid"style={{marginTop:"50px",marginLeft:"50px"}} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
