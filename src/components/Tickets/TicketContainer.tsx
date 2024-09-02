import React from 'react';
import './TicketContainer.css';

interface TicketContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const TicketContainer: React.FC<TicketContainerProps> = ({ children, width, height }) => {
  return (
    <div className="ticket-container" style={{ width, height }}>
      {children}
    </div>
  );
};

export default TicketContainer;