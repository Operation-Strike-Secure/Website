import React from 'react';
import './StatusBadge.css';

interface StatusBadgeProps {
    status: string;
    backgroundColor?: string; // Définition de backgroundColor ici
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, backgroundColor }) => {
    let badgeClass = 'status-badge';

    if (status === 'repondu') {
        badgeClass += ' repondu';
    } else if (status === 'En attente') {
        badgeClass += ' en-attente';
    } else if (status === 'FERME') {
        badgeClass += ' ferme';
    }

    return (
        <div className={badgeClass} style={{ backgroundColor }}>
            {status}
        </div>
    );
};

export default StatusBadge;
