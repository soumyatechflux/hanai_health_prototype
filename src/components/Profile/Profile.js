import React, { useState } from 'react';
import './Profile.css';

import { FaPencilAlt } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Navbar from './../Navbar/Navbar'
// import { FaArrowLeft } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

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

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

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
    bloodGroup: 'B+'
  });

  const [fieldErrors, setFieldErrors] = useState({});
  // const [profileImage, setProfileImage] = useState(null);

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

  return (
    <>
    <Navbar/>
    <div className="container-fluid profile-container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-10 profile-target">
          <div className="profilepage-container text-center">
          <div className="icon-form mb-4 position-relative">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-icon" />
              ) : (
                <CgProfile size={150} style={{ color: 'gray' }} />
              )}

              <FaPencilAlt className='pencil-profile'
                size={20} 
                // style={{ cursor: 'pointer', position: 'absolute', top: '85%', left: '59%', transform: 'translate(-50%, -50%)' }} 
                onClick={triggerFileInput}
              />
              <input 
                id="fileInput" 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
              />
            </div>


            <div className="center-profile">
              {/* <div className="addbtn-form mb-3">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label className="label-profile">Add Profile</Form.Label>
                  <Form.Control className="profile-input" type="file" onChange={handleFileChange} />
                </Form.Group>
              </div> */}

              <div className="data-form">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label profile-lable">First Name</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control "
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
                      <label className="col-form-label profile-lable">Last Name</label>
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
                      <label className="col-form-label profile-lable">Gender</label>
                      <div className="col-sm-12 custom-select">
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
                        </select>
                      </div>
                    </div>
                    {fieldErrors.gender && <span className="error">{fieldErrors.gender}</span>}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label profile-lable">Date of Birth</label>
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
                    {/* <div className="form-group row">
                      <label className="col-form-label profile-lable">Upload Photo</label>
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
                    </div> */}
                    {/* {fieldErrors.uploadPhoto && <span className="error">{fieldErrors.uploadPhoto}</span>} */}
                  </div>
                  <div className="col-md-12">
                    <div className="form-group row">
                      <label className="col-form-label profile-lable">Blood Group</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="bloodGroup"
                          value={form.bloodGroup}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {fieldErrors.bloodGroup && <span className="error">{fieldErrors.bloodGroup}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label profile-lable">Email</label>
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
                      <label className="col-form-label profile-lable">Phone no</label>
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
                      <label className="col-form-label profile-lable">Address</label>
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
                      <label className="col-form-label profile-lable">City code</label>
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
                      <label className="col-form-label profile-lable">Zip code</label>
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
            </div>

            <div className="profile-but d-flex justify-content-around mt-4">
              <Button variant="secondary" onClick={() => navigate('/home')}>
                {/* <FaArrowLeft className="back-icon" /> */}
                <span>Back</span>
              </Button>
              {/* <Button variant="secondary">Cancel</Button> */}
              <Button className='proflie-butn'>Update</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile