import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FWIconLogo } from '../../components/assets';

const SignUp = () => {
  return (
    <LoginWrapper>
      <Logo>
        <FWIconLogo />
      </Logo>

      <StyledForm>
        <div className="formfield">
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

          <ButtonContainer>
            <StyledButtonSubmit type="submit">
              <p>Login</p>
            </StyledButtonSubmit>
          </ButtonContainer>
        </div>
      </StyledForm>
    </LoginWrapper>
  );
};

export default SignUp;

export const LoginWrapper = styled.div`
  background-color: ${COLORS.colorPrimary};
  height: 100vh;
  display: grid;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 588px;
  height: 600px;
  background-color: ${COLORS.white};
  border-radius: 20px;

  .formfield {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 54px;
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
  margin-top: 5px;

  &::placeholder {
    color: #c8c8c8;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const StyledButtonSubmit = styled.button`
  width: 257px;
  height: 55px;
  border-radius: 10px;
  background: #008f8f;
  margin-top: 40px;
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
