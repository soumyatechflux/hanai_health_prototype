import React, { useEffect } from 'react';
import axios from 'axios';
import { decryptData } from './components/CRYPTO/crypto';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// Create Axios instances
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_AQATO_AGENT_APPLICANT_PORTAL_BASE_API_URL,
  timeout: 30000,
});

const axiosInstanceNoAuth = axios.create({
  baseURL: process.env.REACT_APP_AQATO_AGENT_APPLICANT_PORTAL_BASE_API_URL,
  timeout: 30000,
});

// Function to set Authorization header
async function authorizeMe() {
  const encryptedToken = localStorage.getItem('encryptedTokenForUserOfHanaiHealth');
  const token = decryptData(encryptedToken);

  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
}

// Interceptor to set Authorization header for requests
axiosInstance.interceptors.request.use(async (config) => {
  await authorizeMe();
  return config;
});

// Interceptor to handle responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.message === 'Expired token') {
      toast.error('Time elapsed, Please log in again!');
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// API functions
export async function LoginAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/login', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function LoginOtpAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/verify-otp', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function ForgotPasswordEnterEmailAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/forgotpass', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function ForgotPasswordEnterOtpAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/forgototpverify', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function ForgotPasswordEnterNewPasswordAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/changepassword', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function SignupAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/signup', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function SignUpOtpAPI(data) {
  try {
    const response = await axiosInstanceNoAuth.post('/auth/verifysignupotp', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCustomerDataAPI() {
  try {
    const response = await axiosInstance.get('/user/getformdata');
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postCustomerDataAPI(data) {
  try {
    const response = await axiosInstance.post('/user/formdata', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getBMI_RulerDataAPI() {
  try {
    const response = await axiosInstance.get('/health/bmi_info');
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postBMI_RulerDataAPI(data) {
  try {
    const response = await axiosInstance.post('/health/bmi_info', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllDiseasesAPI() {
  try {
    const response = await axiosInstance.get('/disease/getdisease');
    return response;
  } catch (error) {
    throw error;
  }
}

export async function selectDiseaseAPI(data) {
  try {
    const response = await axiosInstance.post('/disease/updatedisease', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addSugarLevelAPI(data) {
  try {
    const response = await axiosInstance.post('/user/sugarlevel', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addBookTestAPI(data) {
  try {
    const response = await axiosInstance.post('/user/addbooktest', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getBookTestDataAPI() {
  try {
    const response = await axiosInstance.get('/user/getbooktest');
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getDiseasePercentage({ diseaseIds }) {
  try {
    const response = await axiosInstance.post('/disease/deseasecount', { diseaseIds });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getSelectDiseaseAPI(data) {
  try {
    const response = await axiosInstance.post('/disease/updatedisease', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductDataAPI() {
  try {
    const response = await axiosInstance.get('/user/getcart');
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addToOrder(data) {
  try {
    const response = await axiosInstance.post('/user/addToOrder', data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getSugarLevel() {
  try {
    const response = await axiosInstance.get('/disease/sugarleveldata');
    return response;
  } catch (error) {
    throw error;
  }
}

export const updateSelectedInterestsAPI = async (selectedInterests) => {
  try {
    const response = await axiosInstance.post('/update-interests', { selectedInterests });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllVendorsAPI = async () => {
  try {
    const response = await axiosInstance.get('/user/getallvendors');
    return response;
  } catch (error) {
    throw error;
  }
};

const App = () => {
  useEffect(() => {
    authorizeMe();
  }, []);

  return (
   <>
   </>
  );
};

export default App;
export { axiosInstance , axiosInstanceNoAuth};

