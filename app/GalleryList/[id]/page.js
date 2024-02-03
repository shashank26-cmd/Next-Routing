"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page({ params }) {
    const [data, setData] = useState({});

    const galleryCall = async () => {
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${params.id}`);
            console.log(response.data.photo);
            setData(response.data.photo);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        galleryCall();
    }, [params.id]);

    return (
        <div className="container mt-4 mb-4 " >
            <div className="row">
                <div className="col-lg-8">




                
                  <h3>Title : {data.title}</h3>
                 {/* <h3 className="ms-2" >}{data.title</h3> */}





                  
                  <div className="d-flex mt-2  ">

                  <p className="fw-bold ">Description:</p>

                    <p className=" d-flex align-items-center ms-2 ">{data.description}</p>

                  </div>
                


                </div>
                <div className="col-lg-4">
                    <Image src={data.url} alt={data.title} className="img-fluid rounded object-fit-cover ms-2" width={300} height={400} />
                </div>
            </div>
        </div>
    );
}



