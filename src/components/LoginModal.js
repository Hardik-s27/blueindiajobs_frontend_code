// src/components/LoginModal.js

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const LoginModal = ({ show, onHide, onSubmit, signUpShow }) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email or Phone number is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSignupClick = (e) => {
    e.preventDefault();
    onHide(); // Hide the login modal
    signUpShow(); // Show the sign-up modal
  };

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" keyboard={true}>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <h5 className="modal-title">Login Form</h5>
        <TfiClose onClick={onHide} style={{ fontSize: "20px", color: "black", cursor: "pointer" }} />
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div class="form-floating mb-3">
                <Field type="email" name="email"  class="form-control border border-dark-subtle" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email Address</label>
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div class="form-floating mb-3">
                <Field type="password" name="password"  class="form-control border border-dark-subtle" id="floatingInput" placeholder="abc@123" />
                <label for="floatingInput">Password</label>
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className='submitbtn d-flex'>
                <button type="submit" className="btn btn-primary btn-block w-50" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </div>
              <div className='d-flex justify-content-center pt-2'>
                <Link to="#" onClick={handleSignupClick}>Signup Here...</Link>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
