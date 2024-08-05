import React from 'react';
import './SubmitButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SubmitButtonProps {
  onClick?: () => void;
  icon?: IconDefinition;
}

const Button: React.FC<SubmitButtonProps> = ({ onClick, icon = faArrowRight }) => {
  return (
    <button type="button" className="rond-button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Button;