// src/components/LoginModal.js

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TfiClose } from 'react-icons/tfi';

const LoginModal = ({ show, onHide, onSubmit }) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email or Phone number is required'),
    password: Yup.string().required('Password is required'),
  });

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
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className='submitbtn d-flex'>
              <button type="submit" className="btn btn-secondary btn-block w-50" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
