import React from 'react';

const ErrorPage = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger mb-3">404</h1>
        <h2 className="text-uppercase mb-3">We are Sorry, Page not found</h2>
        <p className="lead mb-4">
          The page You are Looking for might have been removed, had its name changed, or it is temporarily unavailable.
        </p>
        <a href="/" className="btn btn-primary">Back to HomePage</a>
      </div>
    </div>
  );
}



export default ErrorPage;
