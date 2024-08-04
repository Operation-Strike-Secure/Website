import React from 'react';

interface IdenticalTextProps {
  text: string;
  color?: string;
}

const IdenticalText: React.FC<IdenticalTextProps> = ({ text, color }) => {
  return (
    <span style={{ color: color || '#000' }}>
      {text}
    </span>
  );
};

export default IdenticalText;