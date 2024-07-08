import React from 'react';
import './IdenticalText.css';

interface IdenticalTextProps {
  text: string;
  color?: string;
}

const IdenticalText: React.FC<IdenticalTextProps> = ({ text, color }) => {
  return <p className="identical-text" style={{ color: color }}>{text}</p>;
};

export default IdenticalText;