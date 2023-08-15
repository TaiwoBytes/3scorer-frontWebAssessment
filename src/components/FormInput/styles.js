import styled, { css } from 'styled-components';

export const FormInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  .input-label{
    margin-right: 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5B5B5B;
    width: 110px;
  }
  `;

export const AuthInputLabel = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  pointer-events: none;
  left: 28%;
  padding: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #858585;
  transition: 300ms ease all;
  z-index: 0;

  .auth-input_icon{
    margin-right: 7px;
  }
`;
export const Input = styled.input`
  width: 520px;
  height: 40px;
  border: 0.7px solid #5B5B5B;
  padding: 3px 9px;

  ${({ auth }) => auth &&
    css`
    width: 460px;
    height: 55px;
    border: 0.8px solid #0076EC;
    border-radius: 7.5px;
    padding: 0 9px;

    ::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
    }   
    
    &:focus + ${AuthInputLabel} {
      top: 11px;
      left: 30%;
      font-size: 12px;
      padding: 0;
      z-index: 10;

      .auth-input_icon{
        width: 17px;
      }
    }
    
    &:not(:placeholder-shown) + ${AuthInputLabel} {
      top: 11px;
      left: 30%;
      font-size: 12px;
      padding: 0;
      z-index: 10;

      .auth-input_icon{
        width: 17px;
      }
    }
  `}
`;