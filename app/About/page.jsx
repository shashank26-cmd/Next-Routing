import React from 'react';
import Image from 'next/image';
import About from "../assets/About.svg"

const page = () => {
  return (
    <div className="container "style={{ marginTop: '100px' }}>
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, velit eget tristique viverra, mauris nulla vehicula justo, sit amet aliquam leo.</p>
          <p>Nullam in felis sit amet purus accumsan consequat. Cras non dui eu dui lacinia congue. Integer dapibus metus quis justo vestibulum, at ultricies mi vulputate.</p>
          <p>Donec in massa et leo gravida condimentum. Sed auctor eget nisl eget blandit. Vestibulum at tincidunt libero, id venenatis libero.</p>
        </div>
        <div className="col-md-6">
          <Image src={About} className="img-fluid rounded" alt="About Us Image" />
        </div>
      </div>
    </div>
  );
};

export default page;
