import React, { useEffect, useState } from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCustomerDataAPI, postCustomerDataAPI } from "../../api.js";
import { useLocation } from "react-router-dom";

const AboutCustomer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const email = location.state?.email;
  const firstNamef = location.state?.firstName;
  const lastNamef = location.state?.lastName;
  console.log(firstNamef, lastNamef);
  const token = localStorage.getItem("encryptedTokenForUserOfHanaiHealth");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    phone: "",
    address: "",
    city: "",
    // cityCode: "",
    zipCode: "",
    bloodGroup: "",
    uploadPhoto: null,
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);

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
      // //toast.error("Failed to fetch customer data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCustomerData();
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup the timer if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [token]);

  useEffect(() => {
    fetchCustomerData();
  }, [token]);

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

        const response = await postCustomerDataAPI(formData);

        if (response?.data?.response === true) {
          toast.success("User data submitted successfully.");
          navigate("/ruler");
          fetchCustomerData();
        } else {
          toast.error(
            response?.data?.error_msg || "Failed to submit user data."
          );
        }
      } catch (error) {
        console.error("Error submitting user data:", error);
        //toast.error("Failed to submit user data.");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Form is invalid, not navigating");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        uploadPhoto: file, // Store the file object
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="about-container">
      <section className="content-about">
        <header className="about-header">Let us know more about you</header>
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
                    {fieldErrors.firstName && (
                      <span className="error">{fieldErrors.firstName}</span>
                    )}
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
                    {fieldErrors.lastName && (
                      <span className="error">{fieldErrors.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Gender</label>
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
                      <label className="col-form-label">Date of Birth</label>
                      <div className="col-sm-12">
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          max={today}
                          value={form?.dob}
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
                    <div className="form-group row">
                      <label className="col-form-label">Upload Photo</label>
                      <div className="col-sm-12">
                        <input
                          type="file"
                          className="form-control"
                          name="uploadPhoto"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {profileImage ? (
                          <img
                            src={profileImage}
                            alt="Profile"
                            className="profile-photo"
                          />
                        ) : (
                          <CgProfile size={50} style={{ color: "gray" }} />
                        )}
                      </div>
                    </div>
                    {/* {fieldErrors.uploadPhoto && <span className="error">{fieldErrors.uploadPhoto}</span>} */}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Blood Group</label>
                      <div className="col-sm-12 custom-select">
                        <select
                          name="bloodGroup"
                          className="form-control"
                          value={form?.bloodGroup}
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
                    {fieldErrors?.bloodGroup && (
                      <span className="error">{fieldErrors?.bloodGroup}</span>
                    )}
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
                          value={email}
                          required
                          disabled
                        />
                      </div>
                    </div>
                    {fieldErrors.email && (
                      <span className="error">{fieldErrors?.email}</span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-form-label">Phone no</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={form?.phone}
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
                      <label className="col-form-label">Address</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={form?.address}
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
                      <label className="col-form-label">City</label>
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
                      <label className="col-form-label">Zip code</label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          name="zipCode"
                          value={form?.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {fieldErrors.zipCode && (
                      <span className="error">{fieldErrors?.zipCode}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="margin-btn">
              <button
                type="submit"
                className="btn-start-nxt"
                // onClick={navigate("/ruler")}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Next"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutCustomer;
