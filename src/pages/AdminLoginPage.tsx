import React, { useState } from 'react';
import './AdminLoginPage.css';
import TitleText from '../components/Texts/TitleText';
import IdenticalText from '../components/Texts/IdenticalText';
import LoginContainer from '../components/Login/LoginContainer';
import LoginInput from '../components/Login/LoginInput';
import SubmitButton from '../components/Buttons/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Utilisateur et mot de passe sont requis.');
      return;
    }

    try {
      const response = await fetch('https://www.wanderlab.fr/api/post/admin/connection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identification:username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        navigate('/admin/home');
      } else {
        setError('Nom d’utilisateur ou mot de passe incorrect.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Une erreur est survenue lors de la connexion.\nVeuillez réessayer plus tard.');
    }
  };

  return (
    <div className="page-container">
      <LoginContainer width="400px" height="350px">
        <div className="title-container">
          <TitleText text="CONNEXION" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-title">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <IdenticalText text="Utilisateur" color="#FBF8ED" />
          </div>
          <div className="input-group">
            <LoginInput type="text" placeholder="Utilisateur" width="70%" height="40px" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="input-title">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <IdenticalText text="Mot de passe" color="#FBF8ED" />
          </div>
          <div className="input-group">
            <LoginInput type="password" placeholder="Mot de passe" width="70%" height="40px" value={password} onChange={handlePasswordChange} />
          </div>
          {error && <p className="error-log">{error}</p>}
          <div className="access">
            <SubmitButton icon={faArrowRight} />
          </div>
        </form>
      </LoginContainer>
    </div>
  );
};

export default AdminLoginPage;