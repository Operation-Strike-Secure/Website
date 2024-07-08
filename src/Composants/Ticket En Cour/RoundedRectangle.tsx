import React, { ReactNode } from 'react';
import './RoundedRectangle.css';


interface RoundedRectangleProps {
  className?: string;
  children: ReactNode;
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ className, children }) => {
  return (
    <div className={`rounded-rectangle ${className}`}>
      {children}
    </div>
  );
};

export default RoundedRectangle;