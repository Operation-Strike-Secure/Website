import React from 'react';
import './TextAreaComponent.css';

interface TextAreaComponentProps {
  placeholder: string;
  width?: string;
  height?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ placeholder, width, height, value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="textarea"
      placeholder={placeholder}
      style={{ width, height }}
    />
  );
};

export default TextAreaComponent;