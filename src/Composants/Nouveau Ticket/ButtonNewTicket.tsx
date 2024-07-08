import React from 'react';
import './ButtonNewTicket.css';

interface ButtonNewTicketProps {
  onPress: () => void;
  text: string;
}

export const ButtonNewTicket: React.FC<ButtonNewTicketProps> = ({ onPress, text }) => {
  return (
    <button className={`button-new-ticket`} onClick={onPress}>
      {text}
    </button>
  );
};

export default ButtonNewTicket;