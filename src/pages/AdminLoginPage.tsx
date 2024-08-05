import React from 'react';
import './AdminLoginPage.css';
import TitleText from '../components/TitleText';
import IdenticalText from '../components/IdenticalText';
import LoginContainer from '../components/LoginContainer';
import LoginInput from '../components/LoginInput';
import RondButton from '../components/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AdminLoginPage: React.FC = () => {

  const buttonPosition = {
    marginLeft: '280px'
  };

  return (
    <div className="page-container">
      <LoginContainer width="400px" height="350px">
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
            <IdenticalText text="Mot de passe" color="#FBF8ED" />
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