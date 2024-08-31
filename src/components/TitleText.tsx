import React, { CSSProperties } from 'react';
import './TitleText.css';

interface TitleTextProps {
  text: string;
  style?: CSSProperties;
  color?: string;
}

const TitleText: React.FC<TitleTextProps> = ({ text, style, color }) => {
  return (
    <h2 className="login-title" style={style}>{text}</h2>
  );
};

export default TitleText;