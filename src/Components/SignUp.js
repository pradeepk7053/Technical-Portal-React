import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const SignUp = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h1 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="white-text">
          Your name
        </label>
        <input type="text" required id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="white-text">
          Your email
        </label>
        <input type="email" required id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="white-text">
          Confirm your email
        </label>
        <input type="email"  required id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="white-text">
          Your password
        </label>
        <input type="password" required id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default SignUp;