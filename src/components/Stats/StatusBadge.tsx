import React from 'react';
import './StatusBadge.css';

interface StatusBadgeProps {
  status: string;
  backgroundColor?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'repondu':
        return 'status-badge repondu';
      case 'en attente':
        return 'status-badge en-attente';
      case 'ferme':
        return 'status-badge ferme';
      default:
        return 'status-badge repondu';
    }
  };

  return (
    <span className={getBadgeClass(status)}>
      {status}
    </span>
  );
};

export default StatusBadge;