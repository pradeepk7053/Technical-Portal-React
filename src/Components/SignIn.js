import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


const SignIn = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h1 text-center mb-4">Sign In</p>
      
        <label htmlFor="defaultFormRegisterEmailEx" className="white-text">
          Your email
        </label>
        <input type="email" required id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
       
        <label htmlFor="defaultFormRegisterPasswordEx" className="white-text">
          Your password
        </label>
        <input type="password" required id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
            
         <p className="grey-text" ><input type="checkbox" required name="terms"  /> I accept the <a href="/">Terms and Conditions</a></p>
          <MDBBtn color="unique" type="submit">
            Login
          </MDBBtn>
         <p className="h1 text-center mb-4 white-text">Welcome to TechZone Prime Member( free ) Family </p>    
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default SignIn;