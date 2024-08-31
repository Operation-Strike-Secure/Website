import React from 'react';
import './LoginInput.css';

interface LoginInputProps {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
}

const LoginInput: React.FC<LoginInputProps> = ({ type, placeholder, width, height }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="login-input"
      style={{ width, height }}
    />
  );
};

export default LoginInput;