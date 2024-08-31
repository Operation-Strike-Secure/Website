import React, { useState, useEffect } from 'react';
import TitleText from './TitleText';
import './FilterSelector.css';

interface FilterSelectorProps {
  periodType: string;
  onFilterSelect: (filter: string) => void;
}

const FilterSelector: React.FC<FilterSelectorProps> = ({ periodType, onFilterSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState('SEM 2');
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    switch (periodType) {
      case 'JOUR':
        setOptions(['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE']);
        break;
      case 'SEMAINE':
        setOptions(['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4']);
        break;
      case 'MOIS':
        setOptions(['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']);
        break;
      // case 'ANNEE':
      //   setOptions(['2020', '2021', '2022', '2023']);
      //   break;
      default:
        setOptions([]);
        break;
    }
  }, [periodType]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterSelect(value);
  };

  return (
    <div className="filter-selector-container">
      <div className="filter-title">
        <TitleText text="JOUEURS" />
      </div>
      <select id="filter-selector" value={selectedFilter} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelector;