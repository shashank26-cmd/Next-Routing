import React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.svg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Page = () => {
  return (
    <>
      <h1 className="mb-4 text-center" style={{ marginTop: '70px' }}>My Portfolio</h1>

      <div className="card text-center mt-5 mb-5 m-auto bg-secondary" style={{ maxWidth: '400px' }}>
        <div className="card-body">

          <h5 className="card-title">Shashank Mishra</h5>
          <Image src={profile} className="rounded-circle mx-auto d-block" alt="Your Image" width={150} height={150} />
          <p className="card-text mt-3 m-auto" style={{ maxWidth: '300px' }}>I am a skilled and highly motivated Full Stack developer with expertise in Java, C, and JavaScript.</p>
          <div className="mt-3 d-flex justify-content-center gap-3 ">
            <a href="https://www.linkedin.com/" ><FaLinkedin  color='white'/>
 </a>
            <a href="https://github.com/"><FaGithub color="white" /></a>
            <a href=""><FaInstagram color='white'/></a>
            <a href=""><FaTwitter color='white'/></a>


          </div>

        </div>
      </div>
      
    </>
  );
};

export default Page;
