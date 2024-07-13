import React from 'react';
import './Rectangle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface RectangleProps {
  width?: string;
  height?: string;
  marginTop?: string;
  children: React.ReactNode;
}

const Rectangle: React.FC<RectangleProps> = ({ width = '100%', height = 'auto', marginTop = '0px', children }) => {
  return (
    <div className="rectangle container-fluid" style={{ width, height, marginTop }}>
      <div className="row justify-content-center">
        <div className="col-12 rectangle-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
