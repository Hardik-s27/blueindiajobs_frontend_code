import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import firebase from '../firebase';
import { auth } from '../firebase';
import axios from 'axios';
import SignUpModal from '../components/SignUpModal';
import LoginModal from '../components/LoginModal';
import OtpModal from '../components/OtpModal';
import SwiperComponent from '../components/SwiperComponent';
import Navbar from '../components/Navbar';
import '../css/Home.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Modal } from 'react-bootstrap';
import { TfiClose } from 'react-icons/tfi';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();
  const recaptchaVerifierRef = useRef(null);

  const [modalShow, setModalShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({}); // Store form data here

  const handleModalClose = () => setModalShow(false);
  const handleModalOpen = () => setModalShow(true);

  const handleSignUpClose = () => setSignUpShow(false);
  const handleSignUpOpen = () => {
    setSignUpShow(true);
    setModalShow(false);
  };

  const handleLoginClose = () => setLoginShow(false);
  const handleLoginOpen = () => {
    setLoginShow(true);
    setModalShow(false);
  };

  const handleOtpClose = () => setOtpShow(false);
  const handleOtpOpen = () => setOtpShow(true);

  useEffect(() => {
    // Initialize RecaptchaVerifier only once
    recaptchaVerifierRef.current = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
    });
  }, []);

  const onSubmitSignUp = async (values, { setSubmitting }) => {
    try {
      setFormData(values); // Store form data
      const confirmationResult = await auth.signInWithPhoneNumber(`+91${values.phone_number}`, recaptchaVerifierRef.current);
      setConfirmationResult(confirmationResult);
      setOtp(''); // Clear any previously entered OTP
      setSubmitting(false);
      setSignUpShow(false);
      handleOtpOpen();
    } catch (error) {
      console.error('Error during phone sign-in:', error);
      setSubmitting(false);
      Swal.fire({
        width: "450px",
        icon: "error",
        title: "Failed to send OTP!",
        text: "An error occurred while sending OTP.",
        showConfirmButton: true,
      });
    }
  };

  const onSubmitOtp = async (values, { setSubmitting }) => {
    if (confirmationResult) {
      try {
        await confirmationResult.confirm(values.otp);

        const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData);
        console.log('Registration response:', response.data);

        setSubmitting(false);
        setOtpShow(false);
        Swal.fire({
          width: "450px",
          icon: "success",
          title: "Registered Successfully!",
          showConfirmButton: false,
          timer: 1700,
        });
      } catch (error) {
        console.error('Error during registration:', error);
        setSubmitting(false);
        Swal.fire({
          width: "450px",
          icon: "error",
          title: "Failed to register!",
          text: "An error occurred during registration.",
          showConfirmButton: true,
        });
      }
    } else {
      setSubmitting(false);
      Swal.fire({
        width: "450px",
        icon: "error",
        title: "OTP not sent!",
        showConfirmButton: true,
      });
    }
  };

  const onResendOtp = async () => {
    try {
      const confirmationResult = await auth.signInWithPhoneNumber(`+91${formData.phone_number}`, recaptchaVerifierRef.current);
      setConfirmationResult(confirmationResult);
      // Swal.fire({
      //   width: "450px",
      //   icon: "success",
      //   title: "OTP Resent!",
      //   showConfirmButton: false,
      //   timer: 1700,
      // });
    } catch (error) {
      console.error('Error resending OTP:', error);
      Swal.fire({
        width: "450px",
        icon: "error",
        title: "Failed to resend OTP!",
        text: "An error occurred while resending OTP.",
        showConfirmButton: true,
      });
    }
  };

  const onSubmitLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/login/', values);
      console.log('Login response:', response.data);
  
      Swal.fire({
        width: '450px',
        icon: 'success',
        title: 'Login Successfully!',
        showConfirmButton: false,
        timer: 1700,
      });
  
      setIsLoggedIn(true); 
      setTimeout(() => {
        setSubmitting(false);
        handleLoginClose(); 
      }, 2000); 
    } catch (error) {
      console.error('Error during login:', error);
  
      if (error.response) {
        console.error('Login error response:', error.response.data);
        Swal.fire({
          width: '450px',
          icon: 'error',
          title: 'Invalid User!',
          text: error.response.data.message, 
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          width: '450px',
          icon: 'error',
          title: 'Failed to log in!',
          text: 'An error occurred during login.',
          showConfirmButton: true,
        });
      }
  
      setSubmitting(false);
    }
  };

  return (
    <>
      <div><Navbar /></div>
      <div className="main-container position-relative">
        <SwiperComponent />
        <div className="container position-relative text-center text-white" style={{ zIndex: 2 }}>
          <h1 className="display-4">Welcome to BlueIndia Jobs!</h1>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-lg font-weight-bold color-primary" onClick={isLoggedIn ? () => navigate('/Dashboard') : handleModalOpen}>
              {isLoggedIn ? 'Go to Dashboard' : 'Join Us Now'}
            </button>
          </div>
        </div>
      </div>

      <SignUpModal show={signUpShow} onHide={handleSignUpClose} onSubmit={onSubmitSignUp} />
      <LoginModal show={loginShow} onHide={handleLoginClose} onSubmit={onSubmitLogin} />
      <OtpModal show={otpShow} onHide={handleOtpClose} onSubmit={onSubmitOtp} otp={otp} setOtp={setOtp} onResendOtp={onResendOtp} />

      <Modal show={modalShow} onHide={handleModalClose} centered backdrop="static" keyboard={true}>
        <Modal.Header className="d-flex justify-content-between align-items-center">
          <h5 className="modal-title">Login Or SignUp Here</h5>
          <TfiClose onClick={handleModalClose} style={{ fontSize: "20px", color: "black", cursor: "pointer" }} />
        </Modal.Header>
        <Modal.Body className="justify-content-around p-3">
          <button className="btn btn-primary w-50 m-2 btn-lg" onClick={handleSignUpOpen}>
            Signup
          </button>
          <button className="btn btn-primary w-50 m-2 btn-lg" onClick={handleLoginOpen}>
            Login
          </button>
        </Modal.Body>
      </Modal>
      <div id="recaptcha-container"></div>
      <Footer />
    </>
  );
};

export default Home;
