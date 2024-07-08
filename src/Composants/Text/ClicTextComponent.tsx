import React from 'react';
import './ClicTextComponent.css';

interface TextComponentBlueProps {
  text: string;
  isSelected: boolean;
}

const TextComponentBlue: React.FC<TextComponentBlueProps> = ({ text, isSelected }) => {
  return (
    <span className={`text-component-blue ${isSelected ? 'selected' : ''}`}>
      {text.toUpperCase()}
    </span>
  );
};

export default TextComponentBlue;