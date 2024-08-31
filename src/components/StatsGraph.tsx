import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './StatsGraph.css';
import FilterSelector from './FilterSelector';
import StatContainer from './StatContainer';

interface StatsGraphProps {
  data: {
    labels: string[];
    values: number[];
  };
  periodType: string;
}

const StatsGraph: React.FC<StatsGraphProps> = ({ data, periodType }) => {
  const [specificFilter, setSpecificFilter] = useState('12');

  const handleFilterSelect = (filter: string) => {
    setSpecificFilter(filter);
  };

  const graphData = {
    labels: data.labels,
    datasets: [
      {
        label: `Nombre de Joueurs - ${specificFilter}`,
        data: data.values,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#f7a69a',
        borderWidth: 2,
        pointBackgroundColor: '#f7a69a',
        pointBorderColor: '#f7a69a',
        pointRadius: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw} Joueurs`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20000,
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#2b2b2b',
        },
      },
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#2b2b2b',
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <StatContainer width="90%" maxWidth="1200px" minHeight="300px" padding="20px">
        <div className="filter-header">
          <FilterSelector periodType={periodType} onFilterSelect={handleFilterSelect} />
        </div>
        <Line data={graphData} options={options} />
      </StatContainer>
    </div>
  );
};

export default StatsGraph;