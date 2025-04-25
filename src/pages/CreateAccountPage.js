import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the AccountSettingsPage and pass form data as state
    navigate('/account-settings', { state: formData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAgencyChange = (isAgency) => {
    setFormData((prevState) => ({
      ...prevState,
      isAgency,
    }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center mb-4">Create your PopX Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Are you an agency?</label>
            <div>
              <button
                type="button"
                className={`btn ${formData.isAgency ? 'btn-success' : 'btn-outline-success'} mx-2`}
                onClick={() => handleAgencyChange(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className={`btn ${!formData.isAgency ? 'btn-danger' : 'btn-outline-danger'} mx-2`}
                onClick={() => handleAgencyChange(false)}
              >
                No
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
