import React, { useState } from 'react';
import './TextAreaComponent.css';

interface TextAreaComponentProps {
  placeholder: string;
  width?: string;
  height?: string;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ placeholder, width, height }) => {

  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder={placeholder}
        style={{ width, height }}
      />
  );
};

export default TextAreaComponent;
