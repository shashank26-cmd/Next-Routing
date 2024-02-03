import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const Page = ({ id, title, url, desc }) => {


  return (
    <>
      <Link href={`/GalleryList/${id}`}>
        <div className='mt-1'> 
          <div className="card bg-secondary" style={{ maxWidth: '18rem', height: '29rem' }}>
            <div className="card-body">
              <h5 className="card-title text-center text-light p-2">{title}</h5>
              <div style={{ height: '14rem', width: '100%' }} className="position-relative">
                <Image src={url} alt={title} width={250} height={200} className="card-img-top p-2" style={{ objectFit: 'cover' }} />
              </div>
              <p className="card-text text-light">{desc}</p>
            </div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Page;
