import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { TfiLocationPin } from "react-icons/tfi";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaSquareInstagram,FaTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";


function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.instagram.com/' className='me-3 text-reset'>
            <FaSquareInstagram color='primary' fab icon='instagram' />
          </a>
          <a href='https://www.facebook.com/' className='me-3 text-reset'>
            <ImFacebook2 color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://x.com/i/flow/login' className='me-3 text-reset'>
            <FaTwitter color='secondary' fab icon='twitter' />
          </a>
          <a href='https://in.linkedin.com/' className='me-3 text-reset'>
            <BsLinkedin color='secondary' fab icon='linkedin' />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                BlueIndia Jobs 
                <br />
                powered by RESOLAB
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Hiring
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Assessment 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Verification
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Advisory
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <div className='d-flex'>
              <div>
              <TfiLocationPin />
            </div>
              <div className='d-flex mb-3'>
                <MDBIcon color='secondary' icon='home' className='me-4' />
                
                Abhishree Complex, 202,
                Opposite Star Bazaar, Satellite,
                Ahmedabad, Gujarat 380015
                </div>
              </div>
              <p>
                <CgMail /> 
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                connect@resolabindia.com
              </p>
              <p>
                <MdOutlineLocalPhone />
                <MDBIcon color='secondary' icon='phone' className='me-3' />
                07969323600
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          BlueIndiaJobs.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;