// GallexPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';

const Page = ({ id, title, url, desc }) => {
  return (
    <>

<Link href={`/GalleryList/${id}`} >

<div className='mt-1'> 

    
    <div className="card bg-secondary " style={{ maxWidth: '18rem' , height:"28rem" }}>
        
             <h5 className="card-title text-center text-light p-2 ">{title}</h5>
<div style={{height:"14rem" , width:"100%"}}>

      <Image src={url} alt={title} width={250} height={200} className="card-img-top p-2 " style={{ objectFit: 'cover' }} />
</div>
      <div className="card-body">
        <p className="card-text text-light">{desc}</p>
      </div>
    </div>
    </div>
    </Link>
    </>
  );
};

export default Page;
