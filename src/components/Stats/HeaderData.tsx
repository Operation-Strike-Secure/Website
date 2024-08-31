import React, { useState } from 'react';
import FilterButton from '../Buttons/FilterButton';

import './HeaderData.css';

interface HeaderDataProps {
  onFilterChange: (filter: string) => void;
  onPeriodTypeChange: (type: string) => void;
}

const HeaderData: React.FC<HeaderDataProps> = ({ onFilterChange, onPeriodTypeChange }) => {
  const [activeFilter, setActiveFilter] = useState('SEMAINE');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
    onPeriodTypeChange(filter);
  };

  return (
    <div className="header-data-container">
      <FilterButton
        label="JOUR"
        isActive={activeFilter === 'JOUR'}
        onClick={() => handleFilterClick('JOUR')}
      />
      <FilterButton
        label="SEMAINE"
        isActive={activeFilter === 'SEMAINE'}
        onClick={() => handleFilterClick('SEMAINE')}
      />
      <FilterButton
        label="MOIS"
        isActive={activeFilter === 'MOIS'}
        onClick={() => handleFilterClick('MOIS')}
      />
      {/* <FilterButton
        label="ANNEE"
        isActive={activeFilter === 'ANNEE'}
        onClick={() => handleFilterClick('ANNEE')}
      /> */}
    </div>
  );
};

export default HeaderData;