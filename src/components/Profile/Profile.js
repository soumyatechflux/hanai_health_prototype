import React, { useEffect, useState } from "react";

import "./Profile.css";

import { FaPencilAlt } from "react-icons/fa";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import { CgProfile } from "react-icons/cg";

import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./../Navbar/Navbar";

import { getCustomerDataAPI, postCustomerDataAPI } from "../../api";

import { toast } from "react-toastify";

// import MainPage from '../MainPage/MainPage';

// import { FaArrowLeft } from 'react-icons/fa';

const Profile = ({ updateProfileImage }) => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);

        updateProfileImage(reader.result); // Update image in MainPage
      };

      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const [form, setForm] = useState({
    firstName: "",

    lastName: "",

    gender: "",

    dob: "",

    email: "",

    phone: "",

    address: "",

    city: "",

    zipCode: "",

    uploadPhoto: "",

    bloodGroup: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});

  // const [profileImage, setProfileImage] = useState(null);

  const fetchCustomerData = async () => {
    setIsLoading(true);

    try {
      const response = await getCustomerDataAPI();

      if (response?.data?.response === true) {
        const data = response?.data?.data?.results[0];

        const dateOfBirth = data?.date_of_birth
          ? new Date(data.date_of_birth).toISOString().split("T")[0]
          : "";

        // console.log(data)

        setForm({
          firstName: data?.firstname || "",

          lastName: data?.lastname || "",

          gender: data?.gender || "",

          dob: dateOfBirth || "",

          email: data?.email || "",

          phone: data?.phone_no || "",

          address: data?.address || "",

          city: data?.city || "",

          // cityCode: data?.cityCode || "",

          zipCode: data?.zipcode || "",

          bloodGroup: data?.blood_group || "",

          uploadPhoto: null, // Initialize as null
        });

        setProfileImage(data?.image || null);
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);

      toast.error("Failed to fetch customer data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    Object.keys(form).forEach((key) => {
      if (!form[key] && key !== "uploadPhoto") {
        newErrors[key] = "This field is required";
      }
    });

    setFieldErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        const formData = new FormData();

        formData.append("firstname", form?.firstName);

        formData.append("lastname", form?.lastName);

        formData.append("gender", form?.gender);

        formData.append("date_of_birth", form?.dob);

        formData.append("phone_no", form?.phone);

        formData.append("blood_group", form?.bloodGroup);

        formData.append("address", form?.address);

        formData.append("city", form?.city);

        formData.append("zipcode", form?.zipCode);

        // formData.append("bloodGroup", form?.bloodGroup);

        // formData.append("email", email);

        if (form.uploadPhoto) {
          formData.append("image", form?.uploadPhoto);
        }

        console.log(formData);

        const response = await postCustomerDataAPI(formData);

        if (response?.data?.response === true) {
          toast.success("User data submitted successfully.");

          // navigate("/ruler");

          fetchCustomerData();
        } else {
          toast.error(
            response?.data?.error_msg || "Failed to submit user data."
          );
        }
      } catch (error) {
        console.error("Error submitting user data:", error);

        toast.error("Failed to submit user data.");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Form is invalid, not navigating");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,

      [name]: value,
    }));

    setFieldErrors((prevErrors) => ({
      ...prevErrors,

      [name]: "", // Clear error when user starts typing
    }));
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid profile-container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10 profile-target">
            <div className="profilepage-container text-center">
              <div className="icon-form mb-4 position-relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-icon"
                  />
                ) : (
                  <CgProfile size={150} style={{ color: "gray" }} />
                )}

                <FaPencilAlt
                  className="pencil-profile"
                  size={20}
                  // style={{ cursor: 'pointer', position: 'absolute', top: '85%', left: '59%', transform: 'translate(-50%, -50%)' }}

                  onClick={triggerFileInput}
                />

                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
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
                          <label className="col-form-label profile-lable">
                            First Name
                          </label>

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

                        {fieldErrors.firstName && (
                          <span className="error">{fieldErrors.firstName}</span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Last Name
                          </label>

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

                        {fieldErrors.lastName && (
                          <span className="error">{fieldErrors.lastName}</span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Gender
                          </label>

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

                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        {fieldErrors.gender && (
                          <span className="error">{fieldErrors.gender}</span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Date of Birth
                          </label>

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

                        {fieldErrors.dob && (
                          <span className="error">{fieldErrors.dob}</span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        {/* {fieldErrors.uploadPhoto && <span className="error">{fieldErrors.uploadPhoto}</span>} */}
                      </div>

                      <div className="col-md-12">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Blood Group
                          </label>

                          <div className="col-sm-12">
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

                        {fieldErrors.bloodGroup && (
                          <span className="error">
                            {fieldErrors.bloodGroup}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Email
                          </label>

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

                        {fieldErrors.email && (
                          <span className="error">{fieldErrors.email}</span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Phone no
                          </label>

                          <div className="col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              maxLength={10}
                              value={form.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {fieldErrors.phone && (
                          <span className="error">{fieldErrors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Address
                          </label>

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

                        {fieldErrors.address && (
                          <span className="error">{fieldErrors.address}</span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            City
                          </label>

                          <div className="col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              value={form?.city}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {fieldErrors.cityCode && (
                          <span className="error">{fieldErrors.cityCode}</span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-form-label profile-lable">
                            Zip code
                          </label>

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

                        {fieldErrors.zipCode && (
                          <span className="error">{fieldErrors.zipCode}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-but d-flex justify-content-around mt-4">
                <Button variant="secondary" onClick={() => navigate("/home")}>
                  {/* <FaArrowLeft className="back-icon" /> */}

                  <span>Back</span>
                </Button>

                {/* <Button variant="secondary">Cancel</Button> */}

                <Button className="proflie-butn" onClick={handleSubmit}>
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
