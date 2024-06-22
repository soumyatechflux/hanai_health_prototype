import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: 'Hanai',
    lastName: 'Health',
    gender: 'Female',
    dob: '01/01/2024',
    email: 'hanaihealth@123.com',
    phone: '+91  9870654321',
    address: 'Nashik, Maharashtra, India',
    cityCode: '422011',
    zipCode: '123456',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/ruler');
    }
  };

  return (
    <div>
      <section className="content-about py-3 pe-5">
        <header 
        // style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          Let us know more about you
        </header>
        <div
          className="col-12 grid-margin"
          style={{
            margin: '0 auto',
          }}
        >
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">First Name</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Last Name</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Gender</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="gender"
                          value={form.gender}
                          onChange={handleChange}
                        />
                        {errors.gender && <span className="error">{errors.gender}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Date of Birth</label>
                      <div className="col-sm-9">
                        <input
                          className="form-control"
                          name="dob"
                          placeholder="dd/mm/yyyy"
                          value={form.dob}
                          onChange={handleChange}
                        />
                        {errors.dob && <span className="error">{errors.dob}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Phone no</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group row">
                      <div className="col-12 col-md-12">
                        <label className="col-sm-6 col-form-label">Address</label>
                        <div className="">
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                          />
                          {errors.address && <span className="error">{errors.address}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">City code</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="cityCode"
                          value={form.cityCode}
                          onChange={handleChange}
                        />
                        {errors.cityCode && <span className="error">{errors.cityCode}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Zip code</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          value={form.zipCode}
                          onChange={handleChange}
                        />
                        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="margin-btn">
                  <button type="submit" className="btn-start nxt">Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
