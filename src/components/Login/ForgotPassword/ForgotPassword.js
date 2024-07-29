import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import EnterEmail from './ForgotPassword';
import EnterEmail from './EnterEmail/EnterEmail';
import EnterOtp from './EnterOTP/EnterOtp';
// import EnterOTP from './EnterOTP';
import ResetPassword from './ResetPassword/ResetPassword';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordFlow = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otpVerified, setOtpVerified] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    const handleEmailSubmit = (email) => {
        setEmail(email);
        setStep(2);
    };

    const handleOTPSubmit = (otp) => {
        setOtpVerified(true);
        setStep(3);
    };

    const handlePasswordReset = (password) => {
        alert('Password reset successful. Please login with your new password.');
        navigate('/');
        setStep(1);
        
        setShowModal(false);
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            {/* <Button variant="primary" onClick={handleShow}>
                Forgot Password
            </Button> */}

            {step === 1 && (
                <EnterEmail show={showModal} handleClose={handleClose} onEmailSubmit={handleEmailSubmit} />
            )}
            {step === 2 && (
                <EnterOtp show={showModal} handleClose={handleClose} onOTPSubmit={handleOTPSubmit} />
            )}
            {step === 3 && (
                <ResetPassword show={showModal} handleClose={handleClose} onPasswordReset={handlePasswordReset} />
            )}
        </div>
    );
};

export default ForgotPasswordFlow;
