import React from 'react';
import './Text.css';

type TextProps = {
  word: string;
  color?: string;
};

export default function Text({ word, color }: TextProps) {
  return (
    <span style={{ color: `${color ? color : ''}` }} className="text">
      {word}
    </span>
  );
}
