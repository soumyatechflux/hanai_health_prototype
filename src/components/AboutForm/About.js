import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import DatePicker from 'react-datepicker'; // Import the date picker component
import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles

const About = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: 'Hanai',
    lastName: 'Health',
    gender: 'Female',
    dob: new Date('2024-01-01'),
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

  const handleDateChange = (date) => {
    setForm({ ...form, dob: date });
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
        <header>
          Let us know more about you
        </header>
        <div className="col-12 grid-margin" style={{ margin: '0 auto' }}>
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
                        <select
                          className="form-control"
                          name="gender"
                          value={form.gender}
                          onChange={handleChange}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.gender && <span className="error">{errors.gender}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-6 col-form-label">Date of Birth</label>
                      <div className="col-sm-9">
                        <DatePicker
                          className="form-control"
                          selected={form.dob}
                          onChange={handleDateChange}
                          dateFormat="dd/MM/yyyy"
                        />
                        {errors.dob && <span className="error">{errors.dob}</span>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
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
