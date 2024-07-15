// import React from 'react';
// import './LoginContainer.css';

// interface LoginContainerProps {
//   children: React.ReactNode;
//   width?: string;
//   height?: string;
// }

// const LoginContainer: React.FC<LoginContainerProps> = ({ children, width, height }) => {
//   return (
//     <div className="login-container" style={{ width, height }}>
//       {children}
//     </div>
//   );
// };

// export default LoginContainer;

// src/components/LoginContainer.tsx

import React from 'react';
import './LoginContainer.css';

interface LoginContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ children, width, height }) => {
  return (
    <div className="login-container" style={{ width, height }}>
      {children}
    </div>
  );
};

export default LoginContainer;
