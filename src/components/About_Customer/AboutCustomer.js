import React, { useState } from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const AboutCustomer = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: 'Hanai',
    lastName: 'Health',
    gender: 'Female',
    dob: '2024-01-01',
    email: 'hanaihealth@123.com',
    phone: '+91 9870654321',
    address: 'Nashik, Maharashtra, India',
    cityCode: '422011',
    zipCode: '123456',
    uploadPhoto: '',
    bloodGroup: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error when user starts typing
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, navigating to /ruler');
      navigate('/ruler');
    } else {
      console.log('Form is invalid, not navigating');
      navigate('/ruler');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="about-container">
      <section className="content-about">
        <header className='about-header'>Let us know more about you</header>
        <div className="grid-margin">
          <form className="form-sample" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">First Name</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.firstName && <span className="error">{fieldErrors.firstName}</span>}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Last Name</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.lastName && <span className="error">{fieldErrors.lastName}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label" >Gender</label>
                      <div className="col-sm-12 custom-select" >
                        <select
                          name="gender"
                          className="form-control"
                          value={form.gender}
                          onChange={handleChange}
                          
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    {fieldErrors.gender && <span className="error">{fieldErrors.gender}</span>}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Date of Birth</label>
                      <div className="col-sm-12">
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          value={form.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.dob && <span className="error">{fieldErrors.dob}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Upload Photo</label>
                      <div className="col-sm-12">
                        <input
                          type="file"
                          className="form-control"
                          name="uploadPhoto"
                          onChange={handleFileChange}
                        />
                        {profileImage ? (
                          <img src={profileImage} alt="Profile" className="profile-photo" />
                        ) : (
                          <CgProfile size={50} style={{ color: 'gray' }} />
                        )}
                      </div>
                    </div>
                    {/* {fieldErrors.uploadPhoto && <span className="error">{fieldErrors.uploadPhoto}</span>} */}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Blood Group</label>
                      <div className="col-sm-12 custom-select">
                        {/* <input
                          type="text"
                          className="form-control"
                          name="bloodGroup"
                          value={form.bloodGroup}
                          onChange={handleChange}
                          required
                        /> */}
                        <select
                          name="bloodGroup"
                          className="form-control"
                          value={form.bloodGroup}
                          onChange={handleChange}
                          
                          required
                        >
                          <option value="">Select Blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                    </div>
                    {fieldErrors.bloodGroup && <span className="error">{fieldErrors.bloodGroup}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Email</label>
                      <div className="col-sm-12">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.email && <span className="error">{fieldErrors.email}</span>}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Phone no</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.phone && <span className="error">{fieldErrors.phone}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group row">
                      <label className="col-form-label">Address</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.address && <span className="error">{fieldErrors.address}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">City code</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="cityCode"
                          value={form.cityCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {fieldErrors.cityCode && <span className="error">{fieldErrors.cityCode}</span>}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Zip code</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          value={form.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {fieldErrors.zipCode && <span className="error">{fieldErrors.zipCode}</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="margin-btn">
              <button type="submit"  className="btn-start-nxt">Next</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutCustomer;
