import React from 'react';
import './BackgroundImage.css';

interface BackgroundImageProps {
  imageUrl: string;
  children: React.ReactNode;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl, children }) => {
  const divStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
  };

  return (
    <div className="background-image" style={divStyle}>
      {children}
    </div>
  );
};

export default BackgroundImage;