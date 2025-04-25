import React from 'react';

const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Sign into your PopX Account</h1>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">Don't have an account? <a href="/create-account">Create one now</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
