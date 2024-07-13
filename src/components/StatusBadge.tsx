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
        return 'badge bg-success';
      case 'en attente':
        return 'badge bg-warning';
      case 'ferme':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  };

  return (
    <span className={getBadgeClass(status)}>
      {status}
    </span>
  );
};

export default StatusBadge;