import React from 'react';
import './StatContainer.css';

interface StatContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
}

const StatContainer: React.FC<StatContainerProps> = ({
  children,
  width = '100%',
  height = 'auto',
  maxWidth = '95vw',
  maxHeight = '95vh',
  minWidth = '200px',
  minHeight = '200px',
  padding = '20px',
  margin = '0 auto'
}) => {
  return (
    <div
      className="stat-container"
      style={{
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        padding,
        margin,
      }}
    >
      {children}
    </div>
  );
};

export default StatContainer;