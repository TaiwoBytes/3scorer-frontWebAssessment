import { COLORS } from 'constants/colors';
import styled, { css } from 'styled-components';

export const InputField = styled.input`
  outline: none;
  border: none;
  width: ${({ autoWidth }) => (autoWidth ? '100%' : '37.52rem')};
  height: 4.4rem;
  border-radius: 5px;
  background-color: ${COLORS.white};
  color: ${COLORS['Raisin-Black']};
  /* margin-bottom: 16px; */
  padding: 20px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.ghostWhite};
      color: ${COLORS['gray-200']};
    `};
`;

export const InputFieldIcon = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
`;