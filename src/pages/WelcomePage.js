import React from 'react';

const WelcomePage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4">Welcome to PopX</h1>
        <p className="lead">Welcome to the best platform to manage your accounts. Join us now!</p>
        <div className="mt-4">
          <a href="/create-account" className="btn btn-primary btn-lg mx-2">Create Account</a>
          <a href="/login" className="btn btn-success btn-lg mx-2">Already Registered? Login</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
