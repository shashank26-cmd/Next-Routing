"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallex from "../Gallex/page";
import Search from "../Search/page"
import NoProduct from "../NoProduct/page"

const GalleryList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [gallery, setGallery] = useState([]);

  const getList = async () => {
    try {
      const { data } = await axios.get("/api/Gallery");
      console.log(data.photos);
      setGallery(data.photos);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (

   <>

  
      <h1 className='text-center mt-5'>Gallex</h1>

      <Search  updatesearch={setSearchTerm} />
      { (!searchTerm) ? <NoProduct />  : }





<div className="d-flex flex-wrap p-4 justify-content-center">  

        {gallery?.map((item) => (
          <div className="col-md-3   mb-4"
          key={item.id}>
            <Gallex
              title={item.title}
              url={item.url}
              id={item.id}
              key={item.id}
              desc={item.description}
              />
              
          </div>
        ))}
        </div>
        </>
    
  );
};

export default GalleryList;
