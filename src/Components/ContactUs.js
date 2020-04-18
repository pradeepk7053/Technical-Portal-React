import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const ContactUs = () => {
return (
<div className="h-100 row align-items-center">
<MDBContainer >
  <MDBRow >
    <MDBCol md="6">
        
      <form >
        <p className="h5 text-center mb-5"></p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text" >
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" required={true}/>
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" required={true}/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" required={true}/>
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
        <MDBBtn type="submit" outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
       </div>
      );
    };

    export default ContactUs;