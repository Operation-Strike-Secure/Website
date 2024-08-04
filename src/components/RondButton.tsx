import React, { CSSProperties } from 'react';
import './RondButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SubmitButtonProps {
  onClick?: () => void;
  icon?: IconDefinition;
  position?: CSSProperties; // Ajouter cette prop pour la position
}

const RondButton: React.FC<SubmitButtonProps> = ({ onClick, icon = faArrowRight, position }) => {
  return (
    <button type="submit" className="rond-button" onClick={onClick} style={position}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default RondButton;