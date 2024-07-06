import React, { ReactNode } from 'react';
import './RoundedRectangle.css';

interface RoundedRectangleProps {
  children: ReactNode;
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ children }) => {
  return (
    <div className="rounded-rectangle">
      {children}
    </div>
  );
};

export default RoundedRectangle;