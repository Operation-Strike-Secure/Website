import React from 'react';
import './FilterButton.css';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button className={`filter-button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default FilterButton;