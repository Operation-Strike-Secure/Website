import React, { useState } from 'react';
import HeaderData from '../components/HeaderData';
import StatsGraph from '../components/StatsGraph';
import StatsDetails from '../components/StatsDetails';
import './StatisticPage.css';

const StatisticPage: React.FC = () => {
  const [filter, setFilter] = useState('SEMAINE');
  const [periodType, setPeriodType] = useState('SEMAINE');

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  const handlePeriodTypeChange = (type: string) => {
    setPeriodType(type);
  };

  const getData = (filter: string) => {
    switch (filter) {
      case 'JOUR':
        return {
          graphData: {
            labels: ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI'],
            values: [5, 6000, 14000],
          },
          detailsData: {
            joueurs: 625,
            parties: 625,
            heuresDeJeu: 625,
          },
        };
      case 'SEMAINE':
        return {
          graphData: {
            labels: ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4'],
            values: [12000, 2000, 10000],
          },
          detailsData: {
            joueurs: 4500,
            parties: 4500,
            heuresDeJeu: 4500,
          },
        };
      case 'MOIS':
        return {
          graphData: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            values: [10000, 16000, 1000],
          },
          detailsData: {
            joueurs: 18000,
            parties: 18000,
            heuresDeJeu: 18000,
          },
        };
      case 'fevrier':
        return {
          graphData: {
            labels: ['1 FEV', '15 FEV', '28 FEV'],
            values: [10000, 15000, 20000],
          },
          detailsData: {
            joueurs: 25000,
            parties: 25000,
            heuresDeJeu: 25000,
          },
        };
      case 'decembre':
        return {
          graphData: {
            labels: ['1 DEC', '15 DEC', '31 DEC'],
            values: [5000, 10000, 15000],
          },
          detailsData: {
            joueurs: 30000,
            parties: 30000,
            heuresDeJeu: 30000,
          },
        };
      default:
        return {
          graphData: {
            labels: [],
            values: [],
          },
          detailsData: {
            joueurs: 0,
            parties: 0,
            heuresDeJeu: 0,
          },
        };
    }
  };

  const data = getData(filter);

  return (
    <div className="statistic-container">
      <HeaderData onFilterChange={handleFilterChange} onPeriodTypeChange={handlePeriodTypeChange} />
      <div className="statistic-content">
        <StatsGraph data={data.graphData} periodType={periodType} />
        <StatsDetails data={data.detailsData} />
      </div>
    </div>
  );
};

export default StatisticPage;