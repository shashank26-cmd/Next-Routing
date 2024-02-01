"use client"
import Link from "next/link";

import React, { useEffect } from "react";

const Navbar = () => {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
    },[])

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link href="#" className="navbar-brand text-light" >
          Kenmark
        </Link>

        <span
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="navbar-toggler-icon d-lg-none"
        ></span>

        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Kenmark
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-dark ">

          <ul className="navbar-nav text-light d-lg-none">
            <li className="nav-item mx-auto "  data-bs-dismiss="offcanvas"
              aria-label="Close">
              <Link href="/"
                className="nav-link active text-light mx-auto"
                aria-current="page"
                
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-auto" data-bs-dismiss="offcanvas"
              aria-label="Close">
              <Link  href="/About"
                className="nav-link active text-light"
                aria-current="page"
               
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-auto"data-bs-dismiss="offcanvas"
              aria-label="Close">
              <Link  href="/MyProfile"
                className="nav-link active text-light"
                aria-current="page"
              >
                My Profile
              </Link>
            </li>
            <li className="nav-item mx-auto"data-bs-dismiss="offcanvas"
              aria-label="Close">
              <Link href="/Contact"

                className="nav-link active text-light"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>


            
          </div>

        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-light">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/About"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/MyProfile"
              >
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
