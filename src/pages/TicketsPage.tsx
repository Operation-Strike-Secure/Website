import React, { useState } from 'react';
import Modal from 'react-modal';
import Tableau from '../components/Tableau';
import Filters from '../components/Filters/Filters';
import Rectangle from '../components/Rectangle';

import LoginContainer from '../components/Login/LoginContainer';
import LoginInput from '../components/Login/LoginInput';
import IdenticalText from '../components/Texts/IdenticalText';
import Button from '../components/Buttons/Button'
import RondButton from '../components/Buttons/SubmitButton'
import TextAreaComponent from '../components/Texts/TextAreaComponent';

import './TicketsPage.css';
import { faTimes, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Modal.setAppElement('#root');

const TicketsPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="tickets-page-container container mt-4">
      <Rectangle width="200%" height="50vh" marginTop="90px">
        <Filters onCreateTicketClick={openModal} />
        <Tableau />
      </Rectangle>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
      <div className="creation-ticket-container">
        <LoginContainer width="800px" height="500px">
          <button type="button" className="close-button" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="input-titre">
            <LoginInput type="text" placeholder="Titre" width="70%" height="40px" />
          </div>
          <div className="input-text">
            <TextAreaComponent placeholder="Text" width="70%" height="180px" />
          </div>
          <div className="PJ">
            <IdenticalText text="PIÈCES JOINTES" color="#FFFFFF" />
            <div className="file">
              <Button icon={faPlus} onClick={handleButtonClick}/>
            </div>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className="file-info">
              {selectedFile ? <p>{selectedFile.name}</p> : <p>Aucun fichier sélectionné</p>}
            </div>
          </div>
          <div className="quit-send">
            <button type="button" className="quit" onClick={closeModal}>CANCEL</button>
            <div className="send">
              <RondButton icon={faShare} onClick={closeModal}/>
            </div>
          </div>
        </LoginContainer>
      </div>
      </Modal>
    </div>
  );
};

export default TicketsPage;
