/**
 * Input
 */

import * as React from 'react';
import styled, { withProps } from 'sc';

import { FieldProps } from 'formik';

const InputBase = styled.input`
  padding: 4px 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 4px;
`;

interface ErrorProps {
  show: boolean;
}

const Error = withProps<ErrorProps>()(styled.label)`
  color: yellow;
  padding-top: 4px;
  font-size: 10px;
  height: 10px;
  padding-bottom: 0px;
  transition: opacity .2s linear, transform .2s linear;
  opacity: ${props => (props.show ? '1' : '0')};
  transform: translate3d(0, ${props => (props.show ? '0' : '-15px')}, 0);
`;

export interface InputProps {
  label: string;
}

const Input: React.SFC<InputProps & FieldProps> = ({ field, label, form }) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputBase {...field} />
      <Error show={touched[name] && errors[name]}>{errors[name]}</Error>
    </InputWrapper>
  );
};

export default Input;
