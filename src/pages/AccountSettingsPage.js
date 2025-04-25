import React from 'react';
import { useLocation } from 'react-router-dom';

const AccountSettingsPage = () => {
  const { state } = useLocation(); // Get the state passed from CreateAccountPage

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="text-center mb-4">Account Settings</h1>

        <div className="mb-3">
          <label><strong>Full Name:</strong></label>
          <p>{state.fullName}</p>
        </div>
        <div className="mb-3">
          <label><strong>Phone Number:</strong></label>
          <p>{state.phoneNumber}</p>
        </div>
        <div className="mb-3">
          <label><strong>Email Address:</strong></label>
          <p>{state.email}</p>
        </div>
        <div className="mb-3">
          <label><strong>Company Name:</strong></label>
          <p>{state.companyName}</p>
        </div>
        <div className="mb-3">
          <label><strong>Are you an agency?</strong></label>
          <p>{state.isAgency ? 'Yes' : 'No'}</p>
        </div>

        <button className="btn btn-warning w-100">Edit Account</button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
