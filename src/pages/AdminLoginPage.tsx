// import React from 'react';
// import './AdminLoginPage.css';

// const AdminLoginPage: React.FC = () => {
//   return (
//     <div className="container mt-4">
//       <div className="login-card">
//         <form>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input type="text" className="form-control" id="username" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" />
//           </div>
//           <button type="submit" className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;

import React from 'react';
import './AdminLoginPage.css';
import TitleText from '../components/TitleText';
import IdenticalText from '../components/IdenticalText';
import LoginContainer from '../components/LoginContainer';
import LoginInput from '../components/LoginInput';
import RondButton from '../components/RondButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AdminLoginPage: React.FC = () => {
  const buttonPosition = {
    marginLeft: '280px'
  };

  return (
    <div className="page-container">
      <LoginContainer width="400px" height="420px">
        <div className="title-container">
          <TitleText text="CONNEXION" />
        </div>
        <form className="login-form">
          <div className="input-title">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <IdenticalText text="Utilisateur" color="#FBF8ED" />
          </div>
          <div className="input-group">
            <LoginInput type="text" placeholder="Utilisateur" width="70%" height="40px" />
          </div>
          <div className="input-title">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <IdenticalText text="Utilisateur" color="#FBF8ED" />
          </div>
          <div className="input-group">
            <LoginInput type="password" placeholder="Mot de passe" width="70%" height="40px" />
          </div>
          <RondButton icon={faArrowRight} position={buttonPosition} />
        </form>
      </LoginContainer>
    </div>
  );
};

export default AdminLoginPage;