import React from 'react';
import './StatisticPage.css';

const StatisticPage: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2 className="page-title">Statistics Page</h2>
      <div className="statistics-card">
        <p>This is the page where statistics will be displayed.</p>
        {/* Ajoutez des composants de statistiques ici */}
      </div>
    </div>
  );
};

export default StatisticPage;