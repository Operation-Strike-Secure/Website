import React from 'react';
import './TicketInput.css';

interface TicketInputProps {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TicketInput: React.FC<TicketInputProps> = ({ type, placeholder, width, height, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="ticket-input"
      style={{ width, height }}
      value={value}
      onChange={onChange}
    />
  );
};

export default TicketInput;
