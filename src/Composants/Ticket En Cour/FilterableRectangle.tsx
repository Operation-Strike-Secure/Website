import React, { useState } from 'react';
import './FilterableRectangle.css';
import FilterButton from './FilterButton';

const FilterableRectangle: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const handleFilterClick = (index: number) => {
    setSelectedFilter(index === selectedFilter ? null : index);
  };

  return (
    <div className="filterable-rectangle">
        <div className="filters">
          <FilterButton
            index={0}
            selected={selectedFilter === 0}
            onClick={() => handleFilterClick(0)}
          >
            TOUT
          </FilterButton>
          <FilterButton
            index={1}
            selected={selectedFilter === 1}
            onClick={() => handleFilterClick(1)}
          >
            RÉPONDU
          </FilterButton>
          <FilterButton
            index={2}
            selected={selectedFilter === 2}
            onClick={() => handleFilterClick(2)}
          >
            EN ATTENTE
          </FilterButton>
          <FilterButton
            index={3}
            selected={selectedFilter === 3}
            onClick={() => handleFilterClick(3)}
          >
            FERMÉ
          </FilterButton>
        </div>
    </div>
  );
};

export default FilterableRectangle;