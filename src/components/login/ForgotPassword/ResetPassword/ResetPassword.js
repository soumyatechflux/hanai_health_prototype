import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./ResetPassword.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ForgotPasswordEnterNewPasswordAPI } from "../../../../api";

const ResetPassword = ({ show, handleClose, onPasswordReset, email }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    onPasswordReset(password);

    // setIsLoading(true);

    // try {
    //   const data = {
    //     email: email,
    //     password: password,
    //     confirmpass: confirmPassword,
    //   };

    //   const response = await ForgotPasswordEnterNewPasswordAPI(data);
    //   if (response.data && response.data.success) {
    //     toast.success("Password updated successfully.");
    //     // handleClose();
    //     onPasswordReset(password);
    //   } else {
    //     toast.error(
    //       response.data.message || "Failed to update password. Please try again."
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error updating password:", error);
    //   toast.error("An error occurred while updating password. Please try again.");
    // } finally {
    //   setIsLoading(false);
    // }


  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div className="btn-div">
            <button
              type="submit"
              className="reset-password"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Reset Password"}
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPassword;
