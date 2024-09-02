// import React from 'react';
// import './LoginInput.css';

// interface LoginInputProps {
//   type: string;
//   placeholder: string;
//   width?: string;
//   height?: string;
// }

// const LoginInput: React.FC<LoginInputProps> = ({ type, placeholder, width, height }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className="login-input"
//       style={{ width, height }}
//     />
//   );
// };

// export default LoginInput;

import React, { ChangeEvent } from 'react';
import './LoginInput.css';

interface LoginInputProps {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ type, placeholder, width, height, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="login-input"
      style={{ width, height }}
      value={value}
      onChange={onChange}
    />
  );
};

export default LoginInput;
