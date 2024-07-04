import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TfiClose } from 'react-icons/tfi';
import OtpInput from 'otp-input-react';
import '../css/Styles.css';

const OtpModal = ({ show, onHide, onSubmit, otp, setOtp, onResendOtp }) => {
  const [resendTimer, setResendTimer] = useState(30);

  const otpValidationSchema = Yup.object().shape({
    otp: Yup.string().required('OTP is required').length(6, 'OTP must be 6 digits'),
  });

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleResendOtp = () => {
    setResendTimer(30);
    onResendOtp();
  };

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" keyboard={true}>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <h5 className="modal-title">OTP Verification</h5>
        <TfiClose onClick={onHide} style={{ fontSize: "20px", color: "black", cursor: "pointer" }} />
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ otp: '' }}
          validationSchema={otpValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="otpform">
                <label htmlFor="otp">Enter OTP</label>
                <OtpInput
                  // className="otpinput"
                  value={otp}
                  onChange={(otp) => {
                    setOtp(otp);
                    setFieldValue('otp', otp);
                  }}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="otp-input"
                />
                <ErrorMessage name="otp" component="div" className="text-danger" />
              </div>
              <div className="submitbtn d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                  {isSubmitting ? 'Verifying...' : 'Submit'}
                </button>
              </div>
              <div className="text-center mt-3">
                {resendTimer > 0 ? (
                  <p>Resend OTP in {resendTimer} seconds</p>
                ) : (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default OtpModal;
 