import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter ,MDBIcon, MDBBtn } from "mdbreact";

const Footer = () => {
  return (
    <div style={{position: 'Bottom'}}>
    <MDBFooter  className="page-footer font-small special-color-dark pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">TechZone</h5>
            <p>
                Never miss a deal, price drop or launch by subscribing to our Exclusive Deals, Mobile Price & Mobile Launch alerts. Visit us regularly to get latest mobile price in India, tablet price in India, and laptop price in India.

                Thank you for making us one of the largest gadget discovery & shopping destinations in India!
            </p>
          </MDBCol>
          <MDBCol md="5">
                <MDBBtn social="fb">
                    <MDBIcon fab icon="facebook-f" className="pr-1" />Facebook
                </MDBBtn>
                <MDBBtn social="tw">
                    <MDBIcon fab icon="twitter" className="pr-1" /> Twitter
                </MDBBtn>
                <MDBBtn social="ins">
                    <MDBIcon fab icon="instagram" className="pr-1" /> Instagram
                </MDBBtn>
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Pradeeptechzone.com"> Pradeeptechzone.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  </div>
  );
}

export default Footer;