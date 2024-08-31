import React from 'react';
import './StatsDetails.css';
import StatContainer from './StatContainer';

interface StatsDetailsProps {
  data: {
    joueurs: number;
    parties: number;
    heuresDeJeu: number;
  };
}

const StatsDetails: React.FC<StatsDetailsProps> = ({ data }) => {
  return (
    <div className="details-container">
      <StatContainer width="70%" maxWidth="1200px" minHeight="330px" padding="20px">
        <div className="detail-item">JOUEURS {data.joueurs}</div>
        <div className="detail-item">PARTIES {data.parties}</div>
        <div className="detail-item">HEURES DE JEU {data.heuresDeJeu}</div>
      </StatContainer>
    </div>
  );
};

export default StatsDetails;