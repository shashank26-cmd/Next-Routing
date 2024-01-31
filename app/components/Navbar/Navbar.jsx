import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-light bg-secondary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Shashank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav text-light">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/MyProfile">My Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
