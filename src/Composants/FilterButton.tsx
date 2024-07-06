import React from 'react';
import TextComponentBlue from './ClicTextComponent';

interface FilterButtonProps {
  selected: boolean;
  index: number;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ selected, onClick, children }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`filter-button`}
      style={{ color: selected ? 'blue' : 'black', cursor: 'pointer' }}
      onClick={handleClick}
    >
      <TextComponentBlue text={children as string} isSelected={selected} />
    </div>
  );
};

export default FilterButton;