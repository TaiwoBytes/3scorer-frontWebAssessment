import React, { useState } from 'react';
import { Container, InputField, InputFieldIcon } from './styles';

const Input = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
  autoWidth,
  containerClass,
  value,
  onWheel,
  defaultValue,
  isChecked
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);

  return (
    <Container className={containerClass}>
      <InputField
        className={className}
        autoWidth={autoWidth}
        onWheel={onWheel}
        disabled={disabled}
        name={name}
        id={id}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        placeholder={placeholder}
        onChange={onChange}
        checked={isChecked}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
      />
      {type === 'password' && (
        <InputFieldIcon onClick={toggleShowPassword}>
          {show && "icon"}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default Input;
