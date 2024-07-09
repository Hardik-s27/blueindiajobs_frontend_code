// src/components/SignupModal.js

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TfiClose } from 'react-icons/tfi';
import '../css/Styles.css'
// import LoginModal from './LoginModal'; 
// import SignUpModal from './SignUpModal';

const SignUpModal = ({ show, onHide, onSubmit }) => {
  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    phone_number: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
  });

  // const [loginShow, setLoginShow] = useState(false);
  // const [signUpShow, setSignUpShow] = useState(false);

  // const handleLoginShow = () => setLoginShow(true);
  // const handleLoginHide = () => setLoginShow(false);

  // const handleSignUpShow = () => setSignUpShow(true);
  // const handleSignUpHide = () => setSignUpShow(false);
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" keyboard={true}>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <h5 className="modal-title">Registration Form</h5>
        <TfiClose onClick={onHide} style={{ fontSize: "20px", color: "black", cursor: "pointer" }} />
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            email: '',
            phone_number: '',
            password: '',
            confirmpassword: '',
          }}
          validationSchema={signupValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div> */}

              <div className="form-floating mb-3">
                <Field type="email" name="email"  className="form-control border border-dark-subtle" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email Address</label>
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              {/* <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <Field type="text" name="phone_number" className="form-control" />
                <ErrorMessage name="phone_number" component="div" className="text-danger" />
              </div> */}

              <div className="form-floating mb-3">
                <Field type="phone_number" name="phone_number"  className="form-control border border-dark-subtle" id="floatingInput" placeholder="9876543210" />
                <label for="floatingInput">Phone Number</label>
                <ErrorMessage name="phone_number" component="div" className="text-danger" />
              </div>
{/* 
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div> */}

              <div className="form-floating mb-3">
                <Field type="password" name="password"  className="form-control border border-dark-subtle" id="floatingInput" placeholder="abc@123" />
                <label for="floatingInput">Password</label>
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              {/* <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field type="password" name="confirmpassword" className="form-control" />
                <ErrorMessage name="confirmpassword" component="div" className="text-danger" />
              </div> */}

              <div className="form-floating mb-3">
                <Field type="password" name="confirmpassword"  className="form-control border border-dark-subtle" id="floatingInput" placeholder="abc@123" />
                <label for="floatingInput">Confirm Password</label>
                <ErrorMessage name="confirmpassword" component="div" className="text-danger" />
              </div>

              <div className='submitbtn d-flex bold'>
              <button type="submit" className="btn btn-secondary btn-block w-50" disabled={isSubmitting}>
                {isSubmitting ? 'Sending OTP...' : 'Submit'}
              </button>
              </div>
              
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <div id="recaptcha-container"></div>
    </Modal>
  );
};

export default SignUpModal;
