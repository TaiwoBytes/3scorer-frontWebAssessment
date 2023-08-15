import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FWIconLogo } from '../../components/assets';

const SignUp = () => {
  return (
    <SignupWrapper>
      <SidePanelWrapper>
        <FWIconLogo className="logo" />
        <h1 className="signupText">Create Account</h1>
        <p className="signupSubText">Join the community and have fun</p>
        <p className="signupSubText"> predicting!</p>
      </SidePanelWrapper>
      <StyledForm>
        <div className="formField">
          <div>
            <FormGroup>
              <h3>
                <Label htmlFor="name">First Name</Label>
              </h3>
              <div>
                <Input type="text" id="firstName" placeholder="First Name" />
              </div>
            </FormGroup>
          </div>
          <FormGroup>
            <h3>
              <Label htmlFor="email">Last name</Label>
            </h3>
            <Input type="text" id="lastName" placeholder="Last Name" />
          </FormGroup>
          <FormGroup>
            <h3>
              <Label htmlFor="password">User Name</Label>
            </h3>
            <Input id="userName" type="text" placeholder="User Name" />
          </FormGroup>
          <FormGroup>
            <h3>
              <Label htmlFor="email">Email Address</Label>
            </h3>
            <div>
              <Input id="email" type="email" placeholder="Email Address" />
            </div>
          </FormGroup>
          <FormGroup>
            <h3>
              <Label htmlFor="password">Password</Label>
            </h3>
            <div>
              <Input id="password" type="password" placeholder="Password" />
            </div>
          </FormGroup>
          <FormGroup>
            <h3>
              <Label htmlFor="password">Confirm Password</Label>
            </h3>
            <div>
              <Input
                id="password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </FormGroup>

          <ButtonContainer>
            <StyledButtonSubmit type="submit">
              <p>Sign Up</p>
            </StyledButtonSubmit>
          </ButtonContainer>
        </div>
      </StyledForm>
    </SignupWrapper>
  );
};

export default SignUp;

export const SignupWrapper = styled.div`
  display: flex;
`;

export const SidePanelWrapper = styled.div`
  background: ${COLORS.colorPrimary};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .signupText {
    color: ${COLORS.white};
    font-size: 40px;
    font-weight: 700;
    margin-top: 0px;
  }
  .signupSubText {
    color: ${COLORS.lightGrey};
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
  }
`;

export const FormGroup = styled.div`
  margin: 10px 0px;
`;

export const Label = styled.label`
  color: ${COLORS.black};
  font-size: 16px;
  font-weight: 400;
`;

export const Input = styled.input`
  padding: 16px;
  width: 34em;
  background: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  margin-top: 8px;

  &::placeholder {
    color: #c8c8c8;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .formField {
    margin: 80px;
  }
`;

export const StyledButtonSubmit = styled.button`
  width: 257px;
  height: 55px;
  border-radius: 10px;
  background: #008f8f;
  margin-top: 80px;
  margin-left: 150px;
  border: 1px solid #008f8f;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
`;

const ButtonContainer = styled.div``;
